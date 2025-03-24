'use client';

import { useState } from 'react';
import { toast } from 'react-toastify';
import CardContainer from '@/components/layout/CardContainer';
import CardHeaderContainer from '@/components/layout/CardHeaderContainer';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { CardContent, CardFooter } from '@/components/ui/card';
import Text from '@/components/ui/Text';
import { getCalendarDate, getSplitDate } from '@/utils/func/getCalendarDate';

interface Props {
  date: string;
  time: string;
  onNext: (date: string, time: string) => void;
}

const CalendarFunnel = ({ date, time, onNext }: Props) => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    date ? new Date(date) : undefined,
  );

  const handleClick = () => {
    if (selectedDate) {
      onNext(getSplitDate(selectedDate), time);
    } else {
      toast.error('예약 날짜를 선택해주세요.');
    }
  };

  return (
    <CardContainer>
      <CardHeaderContainer>
        원하는 예약 날짜를 선택해주세요.
      </CardHeaderContainer>
      <Text size='lg' align='center' color='gray03'>
        {getCalendarDate(selectedDate)}
      </Text>
      <CardContent className='my-5 flex flex-col items-center justify-center'>
        <Calendar
          mode='single'
          selected={selectedDate}
          onSelect={setSelectedDate}
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
