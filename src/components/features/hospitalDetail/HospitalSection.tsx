import HospitalBasicInfo from '@/components/features/hospitalDetail/HospitalBasicInfo';
import InfoSection from '@/components/features/hospitalDetail/InfoSection';

import { HospitalDetailDataType } from '@/types/components/hospitalDetail/hospitalInfoData';
import MedicalHours from './MedicalHours';
import ReviewSection from './ReviewSection';

const HospitalSection = ({
  hospitalData,
  infoData,
  reviewData,
}: HospitalDetailDataType) => {
  const {
    dutyAddr = '',
    dutyTel1 = '',
    dutyName = '',
    dgidIdName = '',
  } = hospitalData ?? {};

  const {
    etc = null,
    info = null,
    department = null,
  } = infoData && typeof infoData === 'object' ? infoData : {};

  return (
    <div className='relative my-10 box-border flex h-[100vh_-_80px] w-full items-end break-words p-6 md:p-8 lg:my-20'>
      <div className='mx-auto my-0 flex max-w-screen-xl flex-1 flex-col justify-center'>
        <HospitalBasicInfo
          dutyAddr={dutyAddr}
          dutyTel1={dutyTel1}
          dutyName={dutyName}
          department={department || ''}
        />
        <InfoSection title='진료 정보'>
          <MedicalHours hospitalData={hospitalData} etc={etc} />
        </InfoSection>
        {(dgidIdName || info) && (
          <InfoSection title='병원 정보'>
            <p>{dgidIdName}</p>
            <p>{info}</p>
          </InfoSection>
        )}
        <ReviewSection review={Array.isArray(reviewData) ? reviewData : []} />
      </div>
    </div>
  );
};

export default HospitalSection;
