'use client';

import { useState } from 'react';
import { toast } from 'react-toastify';
import CardContainer from '@/components/layout/CardContainer';
import CardHeaderContainer from '@/components/layout/CardHeaderContainer';
import TimeButtonContainer from '@/components/layout/TimeButtonContainer';
import { Button } from '@/components/ui/button';
import { CardContent, CardFooter } from '@/components/ui/card';
import { generateTimeSlots } from '@/utils/func/getCalendarDate';

interface Props {
  date: string;
  time: string;
  operationTime: { [key: string]: { open: string; close: string } };
  onNext: (time: string) => void;
  onPrev: (date: string) => void;
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

const TimeFunnel = ({ date, time, operationTime, onNext, onPrev }: Props) => {
  const [selectedTime, setSelectedTime] = useState(time);

  const handleTimeButton = (t: string) => {
    setSelectedTime(t);
  };

  const day = dayOfWeek[new Date(date).toString().slice(0, 3)];
  const equalDay = operationTime[day];

  const handleClick = () => {
    if (selectedTime) {
      onNext(selectedTime);
    } else {
      toast.error('예약 시간을 선택해주세요.');
    }
  };

  const { morning, afternoon } = generateTimeSlots(equalDay);

  return (
    <CardContainer>
      <CardHeaderContainer>
        원하는 예약 시간을 선택해주세요.
      </CardHeaderContainer>
      <CardContent className='mt-10 flex h-fit flex-col items-center justify-center gap-10'>
        {equalDay ? (
          <>
            <TimeButtonContainer timeZone='오전'>
              {morning.map((m) => (
                <Button
                  key={crypto.randomUUID()}
                  variant={selectedTime === m ? 'default' : 'time'}
                  size='time'
                  onClick={() => handleTimeButton(m)}
                >
                  {m}
                </Button>
              ))}
            </TimeButtonContainer>
            <TimeButtonContainer timeZone='오후'>
              {afternoon.map((a) => (
                <Button
                  key={crypto.randomUUID()}
                  variant={selectedTime == a ? 'default' : 'time'}
                  size='time'
                  onClick={() => handleTimeButton(a)}
                >
                  {a}
                </Button>
              ))}
            </TimeButtonContainer>
          </>
        ) : (
          <div>아무것도 업슴</div>
        )}
      </CardContent>
      <CardFooter className='mt-16 flex w-full justify-evenly gap-5'>
        <Button onClick={() => onPrev(date)}>이전으로</Button>
        <Button onClick={handleClick}>다음으로</Button>
      </CardFooter>
    </CardContainer>
  );
};

export default TimeFunnel;
