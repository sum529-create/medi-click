const ScheduleTitleBox = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex min-h-[90px] w-full rounded-[13px] bg-main-hover'>
      {children}
    </div>
  );
};

export default ScheduleTitleBox;
