import Title from '@/components/ui/Title';

const MainContentsTitleBox = ({ title }: { title: string }) => {
  return (
    <div className='flex h-[90px] items-center rounded-[13px] bg-deep-blue pl-10'>
      <Title tag='h2' size='lg' color='white'>
        {title}
      </Title>
    </div>
  );
};

export default MainContentsTitleBox;
