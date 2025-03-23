import Banner from '@/components/features/home/Banner';
import ReserveContents from '@/components/features/mypage/myReserveDetail/reserveContents/ReserveContents';

const ReservationDetailPage = ({ params }: { params: { id: string } }) => {
  return (
    <>
      <Banner />
      <ReserveContents />
    </>
  );
};

export default ReservationDetailPage;
