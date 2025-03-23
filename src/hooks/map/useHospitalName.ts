import { useQuery } from '@tanstack/react-query';
import { QUERY_KEY } from '@/constants/queryKey';
import { getHospitalName } from '@/utils/api/hospitals';

export const useHospitalName = (id: string) => {
  return useQuery({
    queryKey: [QUERY_KEY.HOSPITAL_NAME],
    queryFn: () => getHospitalName(id),
  });
};
