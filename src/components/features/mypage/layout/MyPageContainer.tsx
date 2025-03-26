import type { Children } from '@/types/children';

const MyPageContainer = ({ children }: Children) => {
  return <div className='flex w-full gap-20 p-20'>{children}</div>;
};

export default MyPageContainer;
