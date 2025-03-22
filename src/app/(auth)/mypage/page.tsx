import MyPageContainer from '@/components/features/mypage/MyPageContainer';
import MyPageContentsContainer from '@/components/features/mypage/MyPageContentsContainer';
import MyCalendarContainer from '@/components/features/mypage/MyReserveCalendar/MyCalendar/MyCalendarContainer';
import MyCalendarTitleBox from '@/components/features/mypage/MyReserveCalendar/MyCalendar/MyCalendarTitleBox';
import ScheduleDetailContainer from '@/components/features/mypage/MyReserveCalendar/ScheduleBox/ScheduleDetailContainer';
import ScheduleDetailContents from '@/components/features/mypage/MyReserveCalendar/ScheduleBox/ScheduleDetailContents';
import SideBar from '@/components/features/mypage/sideBar/SideBar';
import { Button } from '@/components/ui/button';

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
        <MyCalendarContainer>
          <MyCalendarTitleBox />
          <ScheduleDetailContainer>
            <ScheduleDetailContents>
              <div>
                <h3 className='text-2xl font-bold text-deep-blue'>
                  ㅇㅇ 내과의원
                </h3>
                <p className='text-xl font-medium text-black01'>
                  2025년 3월 20일 (목) 14:00
                </p>
              </div>
              <p className='text-lg font-medium text-black01'>
                상태: 예약 확정
              </p>
            </ScheduleDetailContents>
            <Button className='absolute right-10 top-12 h-[42px] w-[144px] text-lg font-bold'>
              상세보기
            </Button>
          </ScheduleDetailContainer>
        </MyCalendarContainer>
      </MyPageContentsContainer>
    </MyPageContainer>
  );
};

export default MyPage;
