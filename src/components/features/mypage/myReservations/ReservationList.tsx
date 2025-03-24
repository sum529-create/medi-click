'use client';

import Loading from '@/components/common/Loading';
import { useReservations } from '@/hooks/tanstackQuery/useReservations';
import ScheduleDetail from '../ScheduleDetail';

const ReservationList = () => {
  const {
    isReservationsError,
    isReservationsPending,
    getReservationsError,
    reservationList,
  } = useReservations();

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
