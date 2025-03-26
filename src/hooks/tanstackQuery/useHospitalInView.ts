import { useInView } from 'react-intersection-observer';

/** 10개의 병원 목록의 끝에 도달했을 때를 인지하고, 다음 페이지를 보여주는 훅
 * @returns useInView
 */
interface UseHospitalInView {
  hasNextPage: boolean | undefined;
  isFetchingNextPage: boolean;
  fetchNextPage: () => void;
}

export const useHospitalInView = ({
  hasNextPage,
  isFetchingNextPage,
  fetchNextPage,
}: UseHospitalInView) => {
  return useInView({
    threshold: 0,
    onChange: (inView) => {
      if (!inView || !hasNextPage || isFetchingNextPage) return;
      fetchNextPage();
    },
  });
};
