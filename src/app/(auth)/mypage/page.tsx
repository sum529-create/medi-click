import EditProfile from '@/components/features/mypage/EditProfile';
import MyPageContainer from '@/components/features/mypage/MyPageContainer';
import MyPageContentsContainer from '@/components/features/mypage/MyPageContentsContainer';
import SideBar from '@/components/features/mypage/sideBar/SideBar';

const MyPage = () => {
  const userData = {
    name: '김수임',
    email: 'rrrr6563@naver.com',
    phoneNumber: '010-1234-5678',
  }; //임시데이터

  return (
    <MyPageContainer>
      <SideBar user={userData} />
      <MyPageContentsContainer>
        {/* <MyReserveCalendar /> */}
        {/* <MyReserveList /> */}
        <EditProfile userData={userData} />
      </MyPageContentsContainer>
    </MyPageContainer>
  );
};

export default MyPage;
