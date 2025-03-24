'use client';

import Loading from '@/components/common/Loading';
import { useReservations } from '@/hooks/tanstackQuery/useReservations';
import ScheduleDetail from '../../ScheduleDetail';
import ScheduleContainer from './ScheduleContainer';
import ScheduleTitleBox from './ScheduleTitleBox';

const ScheduleBox = () => {
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
    <ScheduleContainer>
      <ScheduleTitleBox />
      <ScheduleDetail reservation={reservationList[0]} />{' '}
      {/*임시로 넣어둔 데이터*/}
    </ScheduleContainer>
  );
};

export default ScheduleBox;
