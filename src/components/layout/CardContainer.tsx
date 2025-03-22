import { Card } from '../ui/card';

const CardContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex h-screen w-full justify-center bg-gray02 pt-10'>
      <Card className='max-h-fit min-h-[600px] w-[650px] rounded-lg p-6 shadow-lg'>
        {children}
      </Card>
    </div>
  );
};

export default CardContainer;
