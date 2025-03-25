'use client';

import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import CardContainer from '@/components/layout/CardContainer';
import CardHeaderContainer from '@/components/layout/CardHeaderContainer';
import TimeButtonContainer from '@/components/layout/TimeButtonContainer';
import { Button } from '@/components/ui/button';
import { CardContent, CardFooter } from '@/components/ui/card';
import { fetchReservationDate } from '@/utils/api/reservation';
import { deleteTimeSecond } from '@/utils/func/convertToTimeFormat';
import { generateTimeSlots } from '@/utils/func/generateTimeSlots';
import {
  getLocalStorage,
  updateLocalStorage,
} from '@/utils/func/getLocalStorage';
import { supabase } from '@/utils/supabase/supabase';

interface Props {
  operationTime: { [key: string]: { open: string; close: string } };
  id: string;
  onNext: () => void;
  onPrev: () => void;
}

const dayOfWeek: { [key: string]: string } = {
  Mon: 'Monday',
  Tue: 'Tuesday',
  Wed: 'Wednesday',
  Thu: 'Thursday',
  Fri: 'Friday',
  Sat: 'Saturday',
  Sun: 'Sunday',
};

const TimeFunnel = ({ operationTime, id, onNext, onPrev }: Props) => {
  const { date, time: storageTime } = getLocalStorage();
  const [time, setTime] = useState<string>(storageTime || '');
  const [checkedTime, setCheckedTime] = useState<Record<string, number>>({});

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchReservationDate(id, date);
      if (data) {
        const map: Record<string, number> = {};
        data.forEach((d) => {
          const time = deleteTimeSecond(d.time);
          map[time] = (map[time] ?? 0) + 1;
        });
        setCheckedTime(map);
      }
    };

    fetchData();

    const channel = supabase
      .channel('reservations-channel')
      .on(
        'postgres_changes',
        {
          event: 'insert',
          schema: 'public',
          table: 'reservations',
        },
        (payload) => {
          if (payload.new.date !== date) return;

          const time = deleteTimeSecond(payload.new.time);

          setCheckedTime((prev) => ({
            ...prev,
            [time]: (prev[time] ?? 0) + 1,
          }));
        },
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const handleTimeButton = (time: string) => {
    setTime(time);
    updateLocalStorage('time', time);
  };

  const day = dayOfWeek[new Date(date).toString().slice(0, 3)];
  const equalDay = operationTime[day];

  // 만약 영업날이 아닐 경우 얼리 리턴
  if (!equalDay) {
    return (
      <CardContainer>
        <CardHeaderContainer>예약 가능한 시간이 없습니다</CardHeaderContainer>
        <CardFooter className='absolute bottom-0 left-0 flex w-full justify-evenly gap-5 px-12'>
          <Button onClick={() => onPrev()} size='move' variant='secondary'>
            이전으로
          </Button>
        </CardFooter>
      </CardContainer>
    );
  }
  const { morning, afternoon } = generateTimeSlots(equalDay);

  const handleClick = () => {
    if (time) {
      if ((checkedTime[time] ?? 0) >= 2) {
        toast.error('이미 예약이 완료된 시간입니다.');
        setTime('');
        return;
      }
      onNext();
    } else {
      toast.error('예약 시간을 선택해주세요.');
    }
  };

  return (
    <CardContainer>
      <CardHeaderContainer>
        원하는 예약 시간을 선택해주세요.
      </CardHeaderContainer>
      <CardContent className='mt-10 flex h-fit flex-col items-center justify-center gap-20'>
        {morning.length > 0 && (
          <TimeButtonContainer timeZone='오전'>
            {morning.map((morningTime) => (
              <Button
                key={morningTime}
                variant={time === morningTime ? 'default' : 'time'}
                size='time'
                disabled={(checkedTime[morningTime] ?? 0) >= 2}
                onClick={() => handleTimeButton(morningTime)}
              >
                {morningTime}
              </Button>
            ))}
          </TimeButtonContainer>
        )}
        {afternoon.length > 0 && (
          <TimeButtonContainer timeZone='오후'>
            {afternoon.map((afternoonTime) => (
              <Button
                key={afternoonTime}
                variant={time == afternoonTime ? 'default' : 'time'}
                size='time'
                disabled={(checkedTime[afternoonTime] ?? 0) >= 2}
                onClick={() => handleTimeButton(afternoonTime)}
              >
                {afternoonTime}
              </Button>
            ))}
          </TimeButtonContainer>
        )}
      </CardContent>
      <CardFooter className='absolute bottom-0 left-0 flex w-full justify-evenly gap-5 px-12'>
        <Button onClick={() => onPrev()} size='move' variant='secondary'>
          이전으로
        </Button>
        <Button onClick={handleClick} size='move'>
          다음으로
        </Button>
      </CardFooter>
    </CardContainer>
  );
};

export default TimeFunnel;
