'use client';

import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import CardContainer from '@/components/layout/CardContainer';
import CardHeaderContainer from '@/components/layout/CardHeaderContainer';
import TimeButtonContainer from '@/components/layout/TimeButtonContainer';
import { Button } from '@/components/ui/button';
import { CardContent, CardFooter } from '@/components/ui/card';
import { generateTimeSlots } from '@/utils/func/generateTimeSlots';
import {
  getLocalStorage,
  updateLocalStorage,
} from '@/utils/func/getLocalStorage';
import { supabase } from '@/utils/supabase/supabaseClient';

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
  const [checkedTime, setCheckedTime] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await supabase
        .from('reservations')
        .select('time')
        .eq('hospital_id', id)
        .eq('date', date);
    };

    fetchData();

    const channel = supabase
      .channel('realtime:reservations')
      .on(
        'postgres_changes',
        {
          event: 'insert',
          schema: 'public',
          table: 'reservations',
        },
        (payload) => {
          console.log('실시간 예약 정보:', payload);
        },
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
      console.log('구독 끊기');
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
                key={crypto.randomUUID()}
                variant={time === morningTime ? 'default' : 'time'}
                size='time'
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
                key={crypto.randomUUID()}
                variant={time == afternoonTime ? 'default' : 'time'}
                size='time'
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
