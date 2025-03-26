import { Children } from '@/types/children';

const HomeContainer = ({ children }: Children) => {
  return (
    <div className='flex w-full flex-col items-center gap-5 px-6 pb-10 text-xl md:px-20 md:pt-5'>
      {children}
    </div>
  );
};

export default HomeContainer;
