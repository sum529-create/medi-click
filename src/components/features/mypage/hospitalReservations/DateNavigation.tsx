import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Text from '@/components/ui/Text';
import { APPOINTMENT_STYLES } from '@/constants/styles';

interface DateNavigationProps {
  previousDate: string;
  currentDate: string;
  nextDate: string;
  onPreviousClick: () => void;
  onNextClick: () => void;
}

const DateNavigation = ({
  previousDate,
  currentDate,
  nextDate,
  onPreviousClick,
  onNextClick,
}: DateNavigationProps) => {
  return (
    <div className={APPOINTMENT_STYLES.dateNavContainer}>
      <div
        className={APPOINTMENT_STYLES.dateNavItem}
        onClick={onPreviousClick}
        role='button'
      >
        <IoIosArrowBack size={24} />
        <Text size='xl'>{previousDate}</Text>
      </div>
      <div className='flex items-center'>
        <Text size='xl' color='deep-blue' isBold={true}>
          {currentDate}
        </Text>
      </div>
      <div
        className={APPOINTMENT_STYLES.dateNavItem}
        onClick={onNextClick}
        role='button'
      >
        <Text size='xl'>{nextDate}</Text>
        <IoIosArrowForward size={24} />
      </div>
    </div>
  );
};

export default DateNavigation;
