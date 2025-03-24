'use client';

import HospitalCard from '@/components/common/HospitalCard';
import Loading from '@/components/common/Loading';
import Text from '@/components/ui/Text';
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

  if (status === 'pending')
    return (
      <div className='flex-[1] border-2 p-6'>
        <Loading size={100} />
      </div>
    );
  if (status === 'error')
    return (
      <div className='flex flex-[1] items-center justify-center border-2 p-6'>
        <Text>병원 목록을 불러오는데 오류가 발생하였습니다.</Text>
      </div>
    );

  return (
    <div className='border-gray-03 flex max-h-[750px] min-h-[400px] flex-[1] flex-col gap-4 overflow-y-auto border-2 bg-white p-6'>
      <Title>병원 목록</Title>
      {!hospitalList || hospitalList.pages.flat().length === 0 ? (
        <Text>검색하신 병원이 존재하지 않습니다.</Text>
      ) : (
        hospitalList.pages.map((page) =>
          page.map((hospital) => (
            <HospitalCard key={hospital.id} hospital={hospital} />
          )),
        )
      )}

      <div ref={ref}></div>
    </div>
  );
};

export default HospitalList;
