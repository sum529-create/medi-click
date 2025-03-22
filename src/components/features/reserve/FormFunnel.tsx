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
  onPrev: () => void;
}

const FormFunnel = ({ onPrev }: Props) => {
  const [value, setValue] = useState('');
  return (
    <CardContainer>
      <CardHeader className='flex items-center justify-center pb-4'>
        <CardTitle className='text-xl'>방문 사유를 입력해주세요.</CardTitle>
      </CardHeader>
      {/* CardContent는 임시 데이터입니다. */}
      <CardContent className='my-5 flex h-3/5 items-center justify-center'>
        <Input
          id='text'
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </CardContent>
      <CardFooter className='flex justify-evenly'>
        <Button onClick={() => onPrev()}>이전으로</Button>
        <Button>제출하기</Button>
      </CardFooter>
    </CardContainer>
  );
};

export default FormFunnel;
