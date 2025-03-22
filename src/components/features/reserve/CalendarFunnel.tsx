'use client';

import { useState } from 'react';
import CardContainer from '@/components/layout/CardContainer';
import { Button } from '@/components/ui/button';
import {
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';

interface Props {
  onNext: (date: string) => void;
}

const CalendarFunnel = ({ onNext }: Props) => {
  const [date, setDate] = useState('');
  return (
    <CardContainer>
      <CardHeader className='flex items-center justify-center pb-4'>
        <CardTitle className='text-xl'>
          원하는 예약 날짜를 선택해주세요.
        </CardTitle>
      </CardHeader>
      {/* CardContent는 임시 데이터입니다. */}
      <CardContent className='my-5 flex h-3/5 items-center justify-center'>
        <Input
          id='date'
          type='date'
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </CardContent>
      <CardFooter className='mt-auto flex justify-evenly'>
        <Button onClick={() => onNext(date)}>다음으로</Button>
      </CardFooter>
    </CardContainer>
  );
};

export default CalendarFunnel;
