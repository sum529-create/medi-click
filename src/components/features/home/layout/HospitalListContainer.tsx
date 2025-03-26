import { Children } from '@/types/children';

const HospitalListContainer = ({ children }: Children) => {
  return (
    <div className='border-gray-03 flex max-h-[750px] min-h-[400px] flex-[1] flex-col gap-4 overflow-y-auto border-2 bg-white p-6'>
      {children}
    </div>
  );
};

export default HospitalListContainer;
