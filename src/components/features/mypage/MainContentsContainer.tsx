import type { Children } from '@/types/children';

const MainContentsContainer = ({ children }: Children) => {
  return (
    <div className='col-span-2 min-h-80 rounded-[15px] border-2 border-gray03'>
      {children}
    </div>
  );
};

export default MainContentsContainer;
