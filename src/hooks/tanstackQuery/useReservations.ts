'use client';

import { useQuery } from '@tanstack/react-query';
import { QUERY_KEY } from '@/constants/queryKey';
import { Database } from '@/types/supabase';
import { getReservationList } from '@/utils/api/reservation';

type Reservation = Database['public']['Tables']['reservations']['Row'] & {
  hospitals: Database['public']['Tables']['hospitals']['Row'];
};

interface UseReservationsReturnValue {
  isReservationsPending: boolean;
  isReservationsError: boolean;
  getReservationsError: Error | null;
  reservationList: Reservation[];
}

/**
 * 현재 로그인 된 사용자의 모든 예약 리스트를 가져오는 훅입니다.
 * useQuery 훅과 getReservationList api 함수를 사용하여 받아온 리스트 데이터를 반환합니다.
 * reservationList가 존재하지 않으면 early return 후 { isProfileError, isProfilePending, getProfileError }를 반환합니다.
 * (length가 0인 것은 데이터가 존재하는 것입니다.)
 * 그렇지 않은 경우엔 reservationList가 보장된 상태이므로 reservationList를 반환합니다.
 *
 * @returns { isReservationsPending, isReservationsError, getReservationsError, reservationList }
 */
export const useReservations = (): Partial<UseReservationsReturnValue> => {
  const {
    data: reservationList,
    isError: isReservationsError,
    isPending: isReservationsPending,
    error: getReservationsError,
  } = useQuery({
    queryKey: [QUERY_KEY.RESERVATION],
    queryFn: getReservationList,
  });

  if (!reservationList)
    return { isReservationsError, isReservationsPending, getReservationsError };

  return { reservationList };
};
