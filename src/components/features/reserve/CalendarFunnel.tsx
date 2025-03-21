'use client';

import { useState } from 'react';
import CardContainer from '@/components/layout/CardContainer';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

interface Props {
  onNext: (date: string) => void;
}

const CalendarFunnel = ({ onNext }: Props) => {
  const [date, setDate] = useState<Date | undefined>();

  const handleClick = () => {
    if (date) {
      onNext(date.toISOString());
    } else {
      alert('날짜를 선택해주세요');
    }
  };

  return (
    <CardContainer>
      <CardHeader className='flex items-center justify-center pb-4'>
        <CardTitle className='text-xl'>
          원하는 예약 날짜를 선택해주세요.
        </CardTitle>
      </CardHeader>
      <p>{date?.toISOString()}</p>
      <CardContent className='my-5 flex items-center justify-center'>
        <Calendar
          mode='single'
          selected={date}
          onSelect={setDate}
          className='rounded-md border shadow'
          disabled={(date) => date < new Date()}
        />
      </CardContent>
      <CardFooter className='mt-auto flex justify-evenly'>
        <Button onClick={handleClick}>다음으로</Button>
      </CardFooter>
    </CardContainer>
  );
};

export default CalendarFunnel;
