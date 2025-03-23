import MyPageContainer from '@/components/features/mypage/MyPageContainer';
import MyPageContentsContainer from '@/components/features/mypage/MyPageContentsContainer';
import MyReserveDetail from '@/components/features/mypage/MyReserveDetail/MyReserveDetail';
import SideBar from '@/components/features/mypage/sideBar/SideBar';

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
        <MyReserveDetail />
      </MyPageContentsContainer>
    </MyPageContainer>
  );
};

export default MyPage;
