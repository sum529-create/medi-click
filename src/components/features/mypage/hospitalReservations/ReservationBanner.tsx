import { ko } from 'date-fns/locale';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import { Button } from '@/components/ui/button';
import Text from '@/components/ui/Text';
import Title from '@/components/ui/Title';
import BannerContainer from '../myReserveDetail/banner/BannerContainer';

interface ReservationBannerProps {
  hospitalName: string;
  patientCount: number;
  currentDate: Date;
  onChangeDate: Dispatch<SetStateAction<Date>>;
}

const ReservationBanner = ({
  hospitalName,
  patientCount,
  currentDate,
  onChangeDate,
}: ReservationBannerProps) => {
  const [selectedDate, setSelectedDate] = useState<Date>(currentDate);

  const onHandleChange = (date: Date | null) => {
    if (!date) return false;
    setSelectedDate(date);
    onChangeDate(date);
  };

  useEffect(() => {
    if (currentDate) setSelectedDate(currentDate);
  }, [currentDate]);

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
          <div className='flex flex-col'>
            <Button
              asChild
              className='h-[44px] w-[230px] cursor-pointer rounded-[10px] bg-deep-blue text-center text-lg'
            >
              <DatePicker
                dateFormat='yyyy년 MM월 dd일 (EE)'
                shouldCloseOnSelect
                selected={selectedDate}
                onChange={(date) => onHandleChange(date)}
                locale={ko}
              />
            </Button>
          </div>
        </div>
      </div>
    </BannerContainer>
  );
};

export default ReservationBanner;
