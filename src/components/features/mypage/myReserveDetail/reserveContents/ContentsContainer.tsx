import type { Children } from '@/types/children';

const ContentsContainer = ({ children }: Children) => {
  return <div className='flex gap-20'>{children}</div>;
};

export default ContentsContainer;
