'use client';

import Loading from '@/components/common/Loading';
import Banner from '@/components/features/mypage/myReserveDetail/banner/Banner';
import ReserveContents from '@/components/features/mypage/myReserveDetail/reserveContents/ReserveContents';
import { QUERY_KEY } from '@/constants/queryKey';
import { useMyPageDataQuery } from '@/hooks/tanstackQuery/useMyPageDataQuery';
import { getReservationDetail } from '@/utils/api/reservation';

const ReservationDetailPage = ({ params }: { params: { id: string } }) => {
  const pathId = params.id;

  const { isError, isPending, error, data } = useMyPageDataQuery(
    QUERY_KEY.RESERVATION,
    () => getReservationDetail(pathId),
  );

  if (isError) throw error;
  if (isPending) return <Loading size={30} />;
  if (!data) return;

  return (
    <>
      <Banner reservation={data} />
      <ReserveContents reservation={data} />
    </>
  );
};

export default ReservationDetailPage;
