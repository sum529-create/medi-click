import { useInView } from 'react-intersection-observer';

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
