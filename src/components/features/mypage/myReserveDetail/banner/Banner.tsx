import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Text from '@/components/ui/Text';
import Title from '@/components/ui/Title';
import { PATH } from '@/constants/routerPath';
import { ReservationProps } from '@/types/components/mypage/reservation.type';
import BannerContainer from './BannerContainer';

const Banner = ({ reservation }: ReservationProps) => {
  const { hospital_id, time, status, hospitals, memo, id, date } = reservation;

  const reservationStatusMessage: { [key: string]: string } = {
    ok: ' 확정',
    cancel: ' 취소',
    waiting: ' 대기중',
  };
  return (
    <BannerContainer>
      <Title tag='h1' size='lg' align='left' color='deep-blue'>
        {hospitals.name}
      </Title>
      <Text size='lg' align='left' color='black02'>
        {date} {time}
      </Text>
      <Text size='lg' align='left' color='black02'>
        상태: 예약 {reservationStatusMessage[status]}
      </Text>
      <div className='absolute bottom-8 right-8 flex gap-10'>
        <Button className='h-[44px] w-[146px] rounded-[10px] bg-deep-blue font-bold'>
          예약 변경
        </Button>
        <Button className='h-[44px] w-[146px] rounded-[10px] font-bold'>
          예약 취소
        </Button>
        <Button className='h-[44px] w-[146px] rounded-[10px] border-2 border-deep-blue bg-white font-bold text-deep-blue hover:bg-gray02'>
          <Link href={`${PATH.HOSPITAL}/${hospital_id}`}>병원 상세</Link>
        </Button>
      </div>
    </BannerContainer>
  );
};

export default Banner;
