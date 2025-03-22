'use client';

import { useState } from 'react';
import { toast } from 'react-toastify';
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
  date: string;
  time: string;
  onNext: (time: string) => void;
  onPrev: (date: string) => void;
}

const TimeFunnel = ({ date, time, onNext, onPrev }: Props) => {
  const [selectedTime, setSelectedTime] = useState('');

  const handleClick = () => {
    if (selectedTime) {
      onNext(selectedTime);
    } else {
      toast.error('시간을 선택해주세요');
    }
  };

  return (
    <CardContainer>
      <CardHeader className='flex items-center justify-center pb-4'>
        <CardTitle className='text-xl'>
          원하는 예약 시간을 선택해주세요.
        </CardTitle>
      </CardHeader>
      {/* CardContent는 임시 데이터입니다. */}
      <CardContent className='my-5 flex h-3/5 items-center justify-center'>
        <Input
          id='time'
          type='time'
          value={time}
          onChange={(e) => setSelectedTime(e.target.value)}
        />
      </CardContent>
      <CardFooter className='flex justify-evenly'>
        {/* 이벤트 핸들러 함수는 로직이 완상되면 함수로 따로 빼서 사용할 예정입니다. */}
        <Button onClick={() => onPrev(date)}>이전으로</Button>
        <Button onClick={handleClick}>다음으로</Button>
      </CardFooter>
    </CardContainer>
  );
};

export default TimeFunnel;
