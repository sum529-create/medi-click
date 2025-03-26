import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { STATUS_MESSAGE } from '@/constants/reservationStatus';
import { PATH } from '@/constants/routerPath';
import { ReservationProps } from '@/types/components/mypage/reservation.type';

const ScheduleDetail = ({ reservation }: ReservationProps) => {
  const { hospitals, date, status, id } = reservation;

  return (
    <div className='relative m-8 h-[140px] rounded-[15px] border-2 border-main bg-white p-4'>
      <div className='ml-5 flex flex-col gap-4'>
        <div>
          <h3 className='text-2xl font-bold text-deep-blue'>
            {hospitals.name}
          </h3>
          <p className='text-xl font-medium text-black01'>{date}</p>
        </div>
        <p className='text-lg font-medium text-black01'>
          상태: 예약{STATUS_MESSAGE[status]}
        </p>
      </div>
      <Button
        asChild
        className='absolute right-10 top-12 h-[42px] w-[144px] text-lg font-bold'
      >
        <Link href={`${PATH.RESERVATION}/${id}`}>상세보기</Link>
      </Button>
    </div>
  );
};

export default ScheduleDetail;
