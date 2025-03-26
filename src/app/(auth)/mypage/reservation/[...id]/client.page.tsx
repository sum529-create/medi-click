'use client';

import { useQuery } from '@tanstack/react-query';
import Banner from '@/components/features/mypage/myReserveDetail/banner/Banner';
import { QUERY_KEY } from '@/constants/queryKey';
import hospitalDetail from '@/utils/api/hospitalDetail';
import { getReservationDetail } from '@/utils/api/reservation';

const ReservationDetailClientPage = ({ pathId }: { pathId: string }) => {
  const { data, isError, isPending, error } = useQuery({
    queryKey: [QUERY_KEY.RESERVATION],
    queryFn: () => getReservationDetail(pathId),
  });

  const {
    data: detail,
    isError: e,
    isPending: p,
  } = useQuery({
    queryKey: [QUERY_KEY.HOSPITAL_DETAIL],
    queryFn: () => hospitalDetail(data.hospital_id),
    enabled: !!data,
  });
  if (isError || isPending || e || p) return;
  return (
    <>
      <Banner reservation={data} />
      {/* <ReserveContents reservation={data} a={detail} /> */}
    </>
  );
};

export default ReservationDetailClientPage;
