'use client';
import { buttonVariants } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { cn } from '@/lib/utils';
import MyCalendarContainer from './MyCalendarContainer';
import MyCalendarTitleBox from './MyCalendarTitleBox';

const MyCalendar = () => {
  return (
    <MyCalendarContainer>
      <MyCalendarTitleBox />
      <Calendar
        classNames={{
          month: 'space-y-4 w-full',
          caption: 'flex justify-center pt-2 relative items-center',
          caption_label: 'text-xl font-bold text-black02',
          nav_button: cn(
            'h-10 w-10 bg-white text-deep-blue hover:text-main-hover',
          ),
          nav_button_previous: 'absolute left-96',
          nav_button_next: 'absolute right-[350px]',
          head_row: 'flex justify-between',
          head_cell:
            'text-black02 w-32 font-bold text-base flex items-center justify-center',
          row: 'flex w-full mt-2 justify-between',
          day: cn(
            buttonVariants({ variant: 'ghost' }),
            'h-24 w-32 p-3 font-normal text-base flex flex-col justify-start items-start aria-selected:bg-sub aria-selected:text-black02 rounded-none',
          ),
          day_selected: 'bg-sub text-black02 hover:bg-main hover:text-white',
          day_today: 'bg-sub text-black02',
        }}
      />
    </MyCalendarContainer>
  );
};

export default MyCalendar;
