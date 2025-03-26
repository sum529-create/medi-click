import { Button } from '@/components/ui/button';
import Text from '@/components/ui/Text';
import Title from '@/components/ui/Title';
import BannerContainer from '../myReserveDetail/banner/BannerContainer';

interface ReservationBannerProps {
  hospitalName: string;
  patientCount: number;
  currentDate: string;
}

const ReservationBanner = ({
  hospitalName,
  patientCount,
  currentDate,
}: ReservationBannerProps) => {
  return (
    <BannerContainer>
      <div className='flex flex-1'>
        <div className='flex w-full flex-row items-center justify-between'>
          <div className='flex flex-col gap-5'>
            <Title tag='h1' size='lg' align='left' color='deep-blue'>
              {hospitalName}
            </Title>
            <Text size='lg' align='left' color='black02'>
              오늘 방문 예정 환자: {patientCount}명
            </Text>
          </div>
          <Button className='h-[44px] w-[200px] rounded-[10px] bg-deep-blue text-lg'>
            {currentDate}
          </Button>
        </div>
      </div>
    </BannerContainer>
  );
};

export default ReservationBanner;
