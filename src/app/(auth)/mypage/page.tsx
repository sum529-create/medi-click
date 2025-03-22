import MyPageContainer from '@/components/features/mypage/MyPageContainer';
import MyPageContentsContainer from '@/components/features/mypage/MyPageContentsContainer';
import SideBar from '@/components/features/mypage/sideBar/SideBar';
import { Button } from '@/components/ui/button';
import Text from '@/components/ui/Text';
import Title from '@/components/ui/Title';

const MyPage = () => {
  const userData = {
    name: '김수임',
    email: 'rrrr6563@naver.com',
  }; //임시데이터

  return (
    <MyPageContainer>
      <SideBar user={userData} />
      <MyPageContentsContainer>
        {/* <MyReserveCalendar /> */}
        <div className='relative flex h-[216px] w-full flex-col gap-5 rounded-[16px] bg-sub p-8'>
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
            <Button className='h-[44px] w-[146px] rounded-[10px] border-2 border-deep-blue bg-white font-bold text-deep-blue'>
              병원 상세
            </Button>
          </div>
        </div>
        <div className='flex gap-20'>
          {/* 예약 정보: 남은 공간을 채움 */}
          <div className='h-[356px] flex-1 rounded-[15px] border-2 border-gray03'>
            <div className='flex h-[90px] rounded-[13px] bg-main-hover'>
              <h2 className='my-auto ml-10 text-3xl font-bold text-white'>
                예약 정보
              </h2>
            </div>
            <div className='grid grid-cols-2 gap-8 p-8'>
              <div className='flex flex-col gap-3'>
                <Title tag='h3' size='md' align='left' color='black02'>
                  예약자
                </Title>
                <Text size='lg' align='left' color='black02'>
                  {userData.name}님
                </Text>
              </div>
              <div className='flex flex-col gap-3'>
                <Title tag='h3' size='md' align='left' color='black02'>
                  진료과
                </Title>
                <Text size='lg' align='left' color='black02'>
                  정형외과
                </Text>
              </div>
              <div className='col-span-2 flex flex-col gap-3'>
                <Title tag='h3' size='md' align='left' color='black02'>
                  증상
                </Title>
                <Text size='lg' align='left' color='black02'>
                  다리가 후들거려요
                </Text>
              </div>
            </div>
          </div>
          <div className='mr-20 h-[356px] w-[356px] flex-shrink-0 bg-gray03'>
            지도 들어갈 곳
          </div>
        </div>
      </MyPageContentsContainer>
    </MyPageContainer>
  );
};

export default MyPage;
