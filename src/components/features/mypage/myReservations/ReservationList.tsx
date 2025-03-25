'use client';

import Loading from '@/components/common/Loading';
import { QUERY_KEY } from '@/constants/queryKey';
import { useMyPageDataQuery } from '@/hooks/tanstackQuery/useMyPageDataQuery';
import { getReservationList } from '@/utils/api/reservation';
import ScheduleDetail from '../ScheduleDetail';

const ReservationList = () => {
  const {
    isError: isReservationsError,
    isPending: isReservationsPending,
    error: getReservationsError,
    data: reservationList,
  } = useMyPageDataQuery(QUERY_KEY.RESERVATION, getReservationList);

  if (isReservationsError) throw getReservationsError;
  if (isReservationsPending) return <Loading size={100} />;
  if (!reservationList) return;
  return (
    <>
      {reservationList.map((item) => (
        <ScheduleDetail key={item.id} reservation={item} />
      ))}
    </>
  );
};

export default ReservationList;
