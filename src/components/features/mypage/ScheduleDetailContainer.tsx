const ScheduleDetailContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className='relative m-8 h-[140px] rounded-[15px] border-2 border-main bg-white p-4'>
      {children}
    </div>
  );
};

export default ScheduleDetailContainer;
