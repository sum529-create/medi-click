import Image from 'next/image';
import Text from '@/components/ui/Text';
import Title from '@/components/ui/Title';

const Banner = () => {
  return (
    <div className='relative flex w-full flex-col overflow-hidden rounded-xl bg-sub p-6 md:min-h-[400px] md:p-20'>
      <Image
        src='/img/bannerImg.jpg'
        fill
        className='object-cover'
        alt='배너이미지'
      />
      <div className='absolute inset-0 bg-black opacity-60'></div>
      <div className='z-10 flex flex-col gap-3'>
        <Title size='xl' color='gray03'>
          원하는 병원을 <span className='text-main'>클릭 한 번</span>으로
        </Title>
        <Text size='xl' color='gray03'>
          지금 바로 내가 원하는 병원을 찾고 예약해보세요.
        </Text>
      </div>
    </div>
  );
};

export default Banner;
