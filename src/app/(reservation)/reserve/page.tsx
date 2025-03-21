import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const ReservationPage = () => {
  return (
    <div className='flex h-screen items-center justify-center bg-gray01'>
      <Carousel className='w-1/3'>
        <CarouselContent>
          <CarouselItem>
            <Card>
              <CardContent className='flex aspect-square items-center justify-center p-6'>
                <span className='text-4xl font-semibold'>1</span>
              </CardContent>
            </Card>
          </CarouselItem>
          <CarouselItem>
            <Card>
              <CardContent className='flex aspect-square items-center justify-center p-6'>
                <span className='text-4xl font-semibold'>2</span>
              </CardContent>
            </Card>
          </CarouselItem>
          <CarouselItem>
            <Card>
              <CardContent className='flex aspect-square items-center justify-center p-6'>
                <span className='text-4xl font-semibold'>3</span>
              </CardContent>
            </Card>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default ReservationPage;
