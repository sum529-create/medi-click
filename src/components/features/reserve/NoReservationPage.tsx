import CardContainer from '@/components/layout/CardContainer';
import CardHeaderContainer from '@/components/layout/CardHeaderContainer';
import { Button } from '@/components/ui/button';
import { CardFooter } from '@/components/ui/card';

interface Props {
  onPrev: () => void;
}

const NoReservationPage = ({ onPrev }: Props) => {
  return (
    <CardContainer>
      <CardHeaderContainer>예약 가능한 시간이 없습니다</CardHeaderContainer>
      <CardFooter className='absolute bottom-0 left-0 flex w-full justify-evenly gap-5 px-12'>
        <Button onClick={() => onPrev()} size='move' variant='secondary'>
          이전으로
        </Button>
      </CardFooter>
    </CardContainer>
  );
};

export default NoReservationPage;
