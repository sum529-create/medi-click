import Banner from '@/components/features/mypage/myReserveDetail/banner/Banner';
import ReserveContents from '@/components/features/mypage/myReserveDetail/reserveContents/ReserveContents';
import { getReservationDetail } from '@/utils/api/reservation';

interface Params {
  params: { id: string };
}

const ReservationDetailPage = async ({ params }: Params) => {
  const pathId = params.id;

  const reservationDetailData = await getReservationDetail(pathId);

  return (
    <>
      <Banner reservation={reservationDetailData} />
      <ReserveContents reservation={reservationDetailData} />
    </>
  );
};

export default ReservationDetailPage;
