'use client';

import { useState } from 'react';
import CardContainer from '@/components/layout/CardContainer';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Textarea } from '@/components/ui/textarea';
import {
  getCalendarDate,
  getReservationTime,
} from '@/utils/func/getCalendarDate';

interface Props {
  date: string;
  time: string;
  onPrev: () => void;
}

const FormFunnel = ({ date, time, onPrev }: Props) => {
  const [value, setValue] = useState('');
  console.log(date, time);

  // 임시 데이터
  const reservationInfo = [
    { title: '성함', value: '김수임' },
    { title: '생년월일', value: '1900년 3월 20일' },
    { title: '예약 병원', value: '서울이비인후과' },
    {
      title: '예약 날짜',
      value: `${getCalendarDate(new Date(date))} ${getReservationTime(time)}`,
    },
  ];

  return (
    <CardContainer>
      <CardHeader className='mb-10 flex items-center justify-center pb-4'>
        <CardTitle className='text-xl'>방문 사유를 입력해주세요.</CardTitle>
      </CardHeader>
      <CardContent className='my-5 flex h-3/5 flex-col items-start justify-center gap-5'>
        <Card className='flex w-full flex-col gap-3 px-10 py-7 shadow-none'>
          {reservationInfo.map((info) => (
            <div className='flex flex-col gap-2' key={crypto.randomUUID()}>
              <p className='font-bold text-gray04'>{info.title}</p>
              <p className='text-gray04'>{info.value}</p>
            </div>
          ))}
        </Card>
        <div className='flex w-full flex-col gap-2'>
          <label htmlFor='reason' className='font-bold'>
            방문 사유
          </label>
          {/* onChange 이벤트 핸들러는 아직 만들지 않은 상태입니다 */}
          <Textarea
            id='reason'
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder='방문 사유를 간단하게 적어주세요...'
          />
        </div>
        <div className='flex items-center space-x-2'>
          <Checkbox id='terms' />
          <label
            htmlFor='terms'
            className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
          >
            개인정보 제 3자 제공 동의
          </label>
        </div>
      </CardContent>
      <CardFooter className='mt-10 flex justify-evenly'>
        <Button onClick={() => onPrev()}>이전으로</Button>
        <Button>제출하기</Button>
      </CardFooter>
    </CardContainer>
  );
};

export default FormFunnel;
