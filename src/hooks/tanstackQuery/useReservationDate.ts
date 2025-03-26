import { useQuery } from '@tanstack/react-query';
import { QUERY_KEY } from '@/constants/queryKey';
import { fetchReservationDate } from '@/utils/api/reservation';

export const useReservationDate = (id: string, date: string) => {
  return useQuery({
    queryKey: [QUERY_KEY.RESERVATION, id],
    queryFn: () => fetchReservationDate(id, date),
  });
};
