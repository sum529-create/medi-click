import type { Children } from '@/types/children';

const InfoDetailContainer = ({ children }: Children) => {
  return <div className='relative grid grid-cols-2 gap-8 p-8'>{children}</div>;
};

export default InfoDetailContainer;
