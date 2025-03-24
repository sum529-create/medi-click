import { useQuery } from '@tanstack/react-query';
import { QUERY_KEY } from '@/constants/queryKey';
import hospitalDetail, {
  hospitalDetailInfoSection,
  hospitalDetailReviews,
} from '@/utils/api/hospitalDetail';

export const useGetHospitalDetail = (hpid: string) => {
  return useQuery({
    queryKey: [QUERY_KEY.HOSPITAL_DETAIL, hpid],
    queryFn: () => hospitalDetail(hpid),
    enabled: !!hpid,
  });
};

export const useGetHospitalInfo = (hpid: string) => {
  return useQuery({
    queryKey: [QUERY_KEY.HOSPITAL_DETAIL_INFO, hpid],
    queryFn: () => hospitalDetailInfoSection(hpid),
    enabled: !!hpid,
  });
};

export const useGetHospitalReview = (hpid: string) => {
  return useQuery({
    queryKey: [QUERY_KEY.HOSPITAL_REVIEW, hpid],
    queryFn: () => hospitalDetailReviews(hpid),
    enabled: !!hpid,
  });
};
