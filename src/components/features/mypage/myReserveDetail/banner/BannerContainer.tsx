import type { Children } from '@/types/children';

const BannerContainer = ({ children }: Children) => {
  return (
    <div className='relative flex h-[216px] w-full flex-col gap-5 rounded-[16px] bg-sub p-8'>
      {children}
    </div>
  );
};

export default BannerContainer;
