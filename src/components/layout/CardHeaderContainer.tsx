import { CardHeader, CardTitle } from '../ui/card';

const CardHeaderContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <CardHeader className='flex items-center justify-center pb-4'>
      <CardTitle className='text-xl'>{children}</CardTitle>
    </CardHeader>
  );
};

export default CardHeaderContainer;
