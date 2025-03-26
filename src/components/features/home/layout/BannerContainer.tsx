import { Children } from '@/types/children';

const BannerContainer = ({ children }: Children) => {
  return (
    <div className='relative flex w-full flex-col overflow-hidden rounded-xl bg-sub p-6 md:min-h-[400px] md:p-20'>
      {children}
    </div>
  );
};

export default BannerContainer;
