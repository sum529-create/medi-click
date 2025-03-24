const ProfileContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex h-[254px] w-[264px] flex-col items-center gap-3 rounded-[15px] bg-gray02 p-8'>
      {children}
    </div>
  );
};

export default ProfileContainer;
