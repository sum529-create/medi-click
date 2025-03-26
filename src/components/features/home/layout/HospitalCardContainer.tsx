import { Location } from '@/types/map';
import { useHospitalStore } from '@/utils/zustand/useHospitalStore';

interface HospitalCardContainerProps {
  children: React.ReactNode;
  hospital: Omit<Location, 'id' | 'name'>;
}

const HospitalCardContainer = ({
  children,
  hospital,
}: HospitalCardContainerProps) => {
  const setSelectedHospital = useHospitalStore(
    (state) => state.setSelectedHospital,
  );

  return (
    <div
      className='flex flex-col gap-2 rounded-xl border-2 border-main bg-white p-6 hover:bg-gray02'
      onClick={() =>
        setSelectedHospital({ lat: hospital.lat, lng: hospital.lng })
      }
    >
      {children}
    </div>
  );
};

export default HospitalCardContainer;
