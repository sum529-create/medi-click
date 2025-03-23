import { Button } from '@/components/ui/button';
import Text from '@/components/ui/Text';
import Title from '@/components/ui/Title';
import BannerContainer from './BannerContainer';

const Banner = () => {
  return (
    <BannerContainer>
      <Title tag='h1' size='lg' align='left' color='deep-blue'>
        서울통정형외과의원 잠실점
      </Title>
      <Text size='lg' align='left' color='black02'>
        2025년 3월 20일 (목) 14:00
      </Text>
      <Text size='lg' align='left' color='black02'>
        상태: 예약 확정
      </Text>
      <div className='absolute bottom-8 right-8 flex gap-10'>
        <Button className='h-[44px] w-[146px] rounded-[10px] bg-deep-blue font-bold'>
          예약 변경
        </Button>
        <Button className='h-[44px] w-[146px] rounded-[10px] font-bold'>
          예약 취소
        </Button>
        <Button className='h-[44px] w-[146px] rounded-[10px] border-2 border-deep-blue bg-white font-bold text-deep-blue hover:bg-gray02'>
          병원 상세
        </Button>
      </div>
    </BannerContainer>
  );
};

export default Banner;
