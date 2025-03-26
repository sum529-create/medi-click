import type { Children } from '@/types/children';

const MyPageContentsContainer = ({ children }: Children) => {
  return <div className='relative flex w-full flex-col gap-10'>{children}</div>;
};

export default MyPageContentsContainer;
