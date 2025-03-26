'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { buttonVariants } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { PATH } from '@/constants/routerPath';
import { cn } from '@/lib/utils';
import { useAccountStore } from '@/utils/zustand/useAccountStore';
import MainContentsContainer from '../../MainContentsContainer';
import MainContentsTitleBox from '../../MainContentsTitleBox';

const MyCalendar = () => {
  const router = useRouter();
  const isHospitalAccount = useAccountStore((state) => state.isHospitalAccount);

  // 병원 계정이면 바로 예약목록 페이지로 이동
  useEffect(() => {
    if (isHospitalAccount) {
      router.push(`${PATH.MYPAGE}/reservations`);
    }
  }, [isHospitalAccount, router]);

  if (isHospitalAccount) {
    return null;
  }

  return (
    <MainContentsContainer>
      <MainContentsTitleBox title='내 예약 캘린더' />
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
    </MainContentsContainer>
  );
};

export default MyCalendar;
