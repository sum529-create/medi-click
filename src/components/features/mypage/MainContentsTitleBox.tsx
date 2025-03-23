const MainContentsTitleBox = ({ title }: { title: string }) => {
  return (
    <div className='flex h-[90px] rounded-[13px] bg-deep-blue'>
      <h2 className='my-auto ml-10 text-3xl font-bold text-white'>{title}</h2>
    </div>
  );
};

export default MainContentsTitleBox;
