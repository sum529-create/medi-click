'use client';

import HospitalCard from '@/components/common/HospitalCard';
import Loading from '@/components/common/Loading';
import Title from '@/components/ui/Title';
import { useHospitalInView } from '@/hooks/tanstackQuery/useHospitalInView';
import { useHospitalsInfiniteQuery } from '@/hooks/tanstackQuery/useHospitalsInfiniteQuery';

const HospitalList = () => {
  const {
    data: hospitalList,
    status,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useHospitalsInfiniteQuery();

  const { ref } = useHospitalInView({
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  });

  if (status === 'pending') return <Loading size={100} />;
  if (status === 'error')
    return (
      <div className='flex items-center justify-center'>
        병원 목록을 불러오는데 오류가 발생하였습니다.
      </div>
    );

  return (
    <div className='border-gray-03 flex max-h-[750px] min-h-[350px] flex-[1] flex-col gap-4 overflow-y-auto border-2 bg-white p-6'>
      <Title>병원 목록</Title>
      {hospitalList?.pages.map((page) =>
        page.map((hospital) => {
          return <HospitalCard key={hospital.id} hospital={hospital} />;
        }),
      )}
      <div ref={ref}></div>
    </div>
  );
};

export default HospitalList;
