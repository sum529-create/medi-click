'use client';

import Loading from '@/components/common/Loading';
import { QUERY_KEY } from '@/constants/queryKey';
import { useMyPageDataQuery } from '@/hooks/tanstackQuery/useMyPageDataQuery';
import { getReservationList } from '@/utils/api/reservation';
import ScheduleDetail from '../../ScheduleDetail';
import ScheduleContainer from './ScheduleContainer';
import ScheduleTitleBox from './ScheduleTitleBox';

const ScheduleBox = ({ userId }: { userId: string | null }) => {
  const {
    isError: isReservationsError,
    isPending: isReservationsPending,
    error: getReservationsError,
    data: reservationList,
  } = useMyPageDataQuery(QUERY_KEY.RESERVATIONS, () =>
    getReservationList(userId!),
  );

  if (isReservationsError) throw getReservationsError;
  if (isReservationsPending) return <Loading size={100} />;
  if (!reservationList) return;

  return (
    <ScheduleContainer>
      <ScheduleTitleBox />
      <ScheduleDetail reservation={reservationList[0]} />
    </ScheduleContainer>
  );
};

export default ScheduleBox;
