import React from 'react';
import { Card, CardContent } from '../ui/card';
import { CarouselItem } from '../ui/carousel';

const CardContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <CarouselItem>
      <Card>
        <CardContent className='flex aspect-square items-center justify-center p-6'>
          {children}
        </CardContent>
      </Card>
    </CarouselItem>
  );
};

export default CardContainer;
