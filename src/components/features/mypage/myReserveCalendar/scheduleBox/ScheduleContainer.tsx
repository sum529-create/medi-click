const ScheduleContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='w-full rounded-[15px] border-2 border-gray03'>
      {children}
    </div>
  );
};

export default ScheduleContainer;
