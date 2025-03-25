const MainContentsTitleBox = ({ title }: { title: string }) => {
  return (
    <div className='flex h-[90px] items-center rounded-[13px] bg-deep-blue pl-10 text-3xl font-bold text-white'>
      {title}
    </div>
  );
};

export default MainContentsTitleBox;
