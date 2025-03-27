import { useInfiniteQuery } from '@tanstack/react-query';
import { QUERY_KEY } from '@/constants/queryKey';
import { getAllHospitalData } from '@/utils/api/hospitals';
import { useSearchStore } from '@/utils/zustand/useSearchStore';

/**
 * 병원 목록을 10개 단위로 무한 스크롤할 수 있게 해주는 훅
 * @returns useInfiniteQuery
 */
export const useHospitalsInfiniteQuery = () => {
  const HOSPITAL_PAGE_SIZE = 10;

  const searchKeyword = useSearchStore((state) => state.searchKeyword);

  return useInfiniteQuery({
    queryKey: [QUERY_KEY.HOSPITAL, searchKeyword],
    queryFn: ({ pageParam = 1 }) =>
      getAllHospitalData(pageParam, searchKeyword),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage?.length === HOSPITAL_PAGE_SIZE
        ? allPages.length + 1
        : undefined;
    },
  });
};
