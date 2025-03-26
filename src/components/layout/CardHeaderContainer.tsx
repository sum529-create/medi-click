import type { Children } from '@/types/children';
import { CardHeader, CardTitle } from '../ui/card';

const CardHeaderContainer = ({ children }: Children) => {
  return (
    <CardHeader className='flex items-center justify-center pb-4'>
      <CardTitle className='text-xl'>{children}</CardTitle>
    </CardHeader>
  );
};

export default CardHeaderContainer;
