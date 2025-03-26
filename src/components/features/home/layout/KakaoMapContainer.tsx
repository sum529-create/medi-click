import { Children } from '@/types/children';

const KakaoMapContainer = ({ children }: Children) => {
  return <div className='relative w-full flex-[2] border-2'>{children}</div>;
};

export default KakaoMapContainer;
