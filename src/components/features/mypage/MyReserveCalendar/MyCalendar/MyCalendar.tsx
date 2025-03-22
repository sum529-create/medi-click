'use client';
import { ko } from 'date-fns/locale';
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
        locale={ko}
        classNames={{
          months:
            'flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0',
          month: 'space-y-4 w-full',
          caption: 'flex justify-center pt-2 relative items-center',
          caption_label: 'text-xl font-bold text-black02',
          nav: 'space-x-2 flex items-center',
          nav_button: cn(
            'h-10 w-10 bg-white text-deep-blue hover:text-main-hover',
          ),
          nav_button_previous: 'absolute left-4',
          nav_button_next: 'absolute right-4',
          table: 'w-full border-collapse space-y-2',
          head_row: 'flex justify-between',
          head_cell:
            'text-black02 w-32 font-bold text-base flex items-center justify-center',
          row: 'flex w-full mt-2 justify-between',
          cell: cn(
            'relative p-0 text-center text-sm focus-within:relative focus-within:z-20',
            '[&:has([aria-selected])]:bg-sub [&:has([aria-selected].day-outside)]:bg-sub/50',
          ),
          day: cn(
            buttonVariants({ variant: 'ghost' }),
            'h-24 w-32 p-3 font-normal text-base flex flex-col justify-start items-start aria-selected:bg-sub aria-selected:text-black02 rounded-none',
          ),
          day_selected: 'bg-sub text-black02 hover:bg-main hover:text-white',
          day_today: 'bg-sub text-black02',
          day_outside: 'text-gray-400 aria-selected:bg-sub/50',
          day_disabled: 'text-gray-400 opacity-50',
          day_range_middle: 'aria-selected:bg-sub aria-selected:text-black02',
          day_hidden: 'invisible',
        }}
      />
    </MyCalendarContainer>
  );
};

export default MyCalendar;
