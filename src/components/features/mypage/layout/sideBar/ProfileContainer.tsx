import type { Children } from '@/types/children';

const ProfileContainer = ({ children }: Children) => {
  return (
    <div className='flex h-[254px] w-[264px] flex-col items-center gap-3 rounded-[15px] bg-gray02 p-8'>
      {children}
    </div>
  );
};

export default ProfileContainer;
