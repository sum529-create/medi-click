import { useQuery } from '@tanstack/react-query';
import { getHospitalName } from '@/utils/api/hospitals';

export const useHospitalName = (id: string) => {
  return useQuery({
    queryKey: ['hospitalName'],
    queryFn: () => getHospitalName(id),
  });
};
