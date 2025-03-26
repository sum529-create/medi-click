import Title from '@/components/ui/Title';

const ScheduleTitleBox = () => {
  return (
    <div className='flex min-h-[90px] w-full items-center rounded-[13px] bg-main-hover pl-10'>
      <Title tag='h2' size='lg' color='white'>
        예정된 예약
      </Title>
    </div>
  );
};

export default ScheduleTitleBox;
