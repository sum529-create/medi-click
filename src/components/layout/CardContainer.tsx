import { Card } from '../ui/card';

const CardContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex max-h-fit min-h-screen w-full justify-center bg-gray02 py-10'>
      <Card className='relative h-[700px] min-h-fit w-[650px] rounded-lg p-6 shadow-lg'>
        {children}
      </Card>
    </div>
  );
};

export default CardContainer;
