const MyCalendarContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='col-span-2 rounded-[15px] border-2 border-gray03'>
      {children}
    </div>
  );
};

export default MyCalendarContainer;
