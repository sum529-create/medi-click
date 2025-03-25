import MainContentsContainer from '@/components/features/mypage/MainContentsContainer';
import MainContentsTitleBox from '@/components/features/mypage/MainContentsTitleBox';
import ReservationList from '@/components/features/mypage/myReservations/ReservationList';

const ReserveListPage = () => {
  return (
    <MainContentsContainer>
      <MainContentsTitleBox title='내 예약 목록' />
      <ReservationList />
    </MainContentsContainer>
  );
};

export default ReserveListPage;
