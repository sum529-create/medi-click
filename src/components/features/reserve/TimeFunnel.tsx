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
// import { Input } from '@/components/ui/input';

interface Props {
  date: string;
  time: string;
  onNext: (time: string) => void;
  onPrev: (date: string) => void;
}

const morning = [
  '09:00',
  '09:30',
  '10:00',
  '10:30',
  '11:00',
  '11:30',
  '12:00',
  '12:30',
];
const afternoon = [
  '14:00',
  '14:30',
  '15:00',
  '15:30',
  '16:00',
  '16:30',
  '17:00',
  '17:30',
];

const TimeFunnel = ({ date, time, onNext, onPrev }: Props) => {
  const [selectedTime, setSelectedTime] = useState(time);
  console.log(selectedTime);

  return (
    <CardContainer>
      <CardHeader className='flex items-center justify-center pb-4'>
        <CardTitle className='text-xl'>
          원하는 예약 시간을 선택해주세요.
        </CardTitle>
      </CardHeader>
      <CardContent className='my-5 flex h-fit flex-col items-center justify-center gap-5'>
        <div className='flex flex-col items-start gap-2'>
          <p className='font-bold'>오전</p>
          <div className='mx-auto grid w-full max-w-md grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4'>
            {morning.map((m) => (
              <Button
                key={crypto.randomUUID()}
                variant={selectedTime === m ? 'default' : 'time'}
                size='time'
                onClick={() => setSelectedTime(m)}
              >
                {m}
              </Button>
            ))}
          </div>
        </div>
        <div className='flex flex-col items-start gap-2'>
          <p className='font-bold'>오후</p>
          <div className='mx-auto grid w-full max-w-md grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4'>
            {afternoon.map((a) => (
              <Button
                key={crypto.randomUUID()}
                variant={selectedTime == a ? 'default' : 'time'}
                size='time'
                onClick={() => setSelectedTime(a)}
              >
                {a}
              </Button>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter className='mt-24 flex justify-evenly'>
        <Button onClick={() => onPrev(date)}>이전으로</Button>
        <Button onClick={() => onNext(selectedTime)}>다음으로</Button>
      </CardFooter>
    </CardContainer>
  );
};

export default TimeFunnel;
