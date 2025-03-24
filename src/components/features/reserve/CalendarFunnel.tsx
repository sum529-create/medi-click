'use client';

import { useState } from 'react';
import { toast } from 'react-toastify';
import CardContainer from '@/components/layout/CardContainer';
import CardHeaderContainer from '@/components/layout/CardHeaderContainer';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { CardContent, CardFooter } from '@/components/ui/card';
import Text from '@/components/ui/Text';
import { STORAGE_KEY } from '@/constants/StorageKey';
import { getCalendarDate, getSplitDate } from '@/utils/func/getCalendarDate';
import {
  getLocalStorage,
  updateLocalStorage,
} from '@/utils/func/getLocalStorage';

interface Props {
  onNext: () => void;
}

const CalendarFunnel = ({ onNext }: Props) => {
  const [date, setDate] = useState<Date | undefined>(() => {
    const { date: storageDate } = getLocalStorage();
    return storageDate ? new Date(storageDate) : undefined;
  });

  const handleClick = () => {
    if (date) {
      updateLocalStorage('date', getSplitDate(date));
      onNext();
    } else {
      toast.error('예약 날짜를 선택해주세요.');
    }
  };

  const handleSelectDate = (date: Date) => {
    setDate(date);
    localStorage.setItem(STORAGE_KEY.RESERVATION, JSON.stringify({ date }));
  };

  return (
    <CardContainer>
      <CardHeaderContainer>
        원하는 예약 날짜를 선택해주세요.
      </CardHeaderContainer>
      <Text size='lg' align='center' color='gray03'>
        {getCalendarDate(date)}
      </Text>
      <CardContent className='my-5 flex flex-col items-center justify-center'>
        <Calendar
          mode='single'
          selected={date}
          onSelect={(date) => handleSelectDate(date as Date)}
          className='w-full rounded-md border p-3 shadow'
          classNames={{
            caption: 'flex justify-center pt-1 relative items-center mb-3',
            caption_label: 'text-lg',
            months: 'flex w-full justify-center',
            month: 'w-full',
            table: 'w-full table-fixed border-collapse',
            head_row: '',
            head_cell: 'text-muted-foreground text-center w-[40px] h-[40px]',
            row: '',
            cell: 'p-0 text-center align-middle',
            day: 'w-[40px] h-[40px] rounded hover:bg-accent hover:text-accent-foreground focus:outline-none mb-2',
          }}
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
