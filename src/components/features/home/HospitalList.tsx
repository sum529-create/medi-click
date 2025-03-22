import HospitalCard from '@/components/common/HospitalCard';
import Title from '@/components/ui/Title';
import { getAllHospitalData } from '@/utils/api/hospitals';

const HospitalList = async () => {
  // 실제 데이터 적용되면 HospitalCard는 map으로 돌릴 예정입니다.
  const hospitalList = await getAllHospitalData();

  return (
    <div className='border-gray-03 flex flex-[1] flex-col gap-4 border-2 bg-white p-6'>
      <Title>병원 목록</Title>
      {hospitalList?.map((hospital) => {
        return <HospitalCard key={hospital.id} hospital={hospital} />;
      })}
    </div>
  );
};

export default HospitalList;
