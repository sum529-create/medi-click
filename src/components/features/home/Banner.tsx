import Text from '@/components/ui/Text';
import Title from '@/components/ui/Title';

const Banner = () => {
  return (
    <div className='flex w-full flex-col justify-center gap-4 rounded-xl bg-sub p-6 md:min-h-[280px] md:p-20'>
      <Title size='xl' color='deep-blue'>
        원하는 병원을 클릭 한 번으로
      </Title>
      <Text size='xl'>지금 바로 내가 원하는 병원을 찾고 예약해보세요.</Text>
    </div>
  );
};

export default Banner;
