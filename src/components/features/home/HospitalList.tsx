import HospitalCard from '@/components/common/HospitalCard';

const HospitalList = () => {
  // 실제 데이터 적용되면 HospitalCard는 map으로 돌릴 예정입니다.

  return (
    <div className='border-gray-03 flex flex-[1] flex-col gap-4 border-2 bg-white p-6'>
      <h1 className='text-xl font-bold'>병원 목록</h1>
      <HospitalCard />
      <HospitalCard />
      <HospitalCard />
    </div>
  );
};

export default HospitalList;
