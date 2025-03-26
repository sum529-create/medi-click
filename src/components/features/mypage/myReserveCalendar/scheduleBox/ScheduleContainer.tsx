import type { Children } from '@/types/children';

const ScheduleContainer = ({ children }: Children) => {
  return (
    <div className='w-full rounded-[15px] border-2 border-gray03'>
      {children}
    </div>
  );
};

export default ScheduleContainer;
