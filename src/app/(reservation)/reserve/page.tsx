import CalendarCard from '@/components/features/reserve/CalendarCard';
import FormCard from '@/components/features/reserve/FormCard';
import ReserveTimeCard from '@/components/features/reserve/ReserveTimeCard';
import CardContainer from '@/components/layout/CardContainer';
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

/**
 * 예약 페이지
 */

const ReservationPage = () => {
  return (
    <div className='flex h-screen w-screen items-center justify-center bg-gray01'>
      <Carousel className='w-1/2'>
        <CarouselContent>
          <CardContainer>
            <CalendarCard />
          </CardContainer>
          <CardContainer>
            <ReserveTimeCard />
          </CardContainer>
          <CardContainer>
            <FormCard />
          </CardContainer>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default ReservationPage;
