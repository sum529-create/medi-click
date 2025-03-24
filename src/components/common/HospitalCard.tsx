'use client';

import Link from 'next/link';
import { PATH } from '@/constants/routerPath';
import { Tables } from '@/types/supabase';
import { useHospitalStore } from '@/utils/zustand/useHospitalStore';
import { Button } from '../ui/button';
import Text from '../ui/Text';
import Title from '../ui/Title';

interface HospitalCardProps {
  hospital: Tables<'hospitals'>;
}

const HospitalCard = ({ hospital }: HospitalCardProps) => {
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
      <div className='flex flex-col gap-1'>
        <Title>{hospital.name}</Title>
        <Text>{hospital.department}</Text>
      </div>
      <div className='flex justify-end'>
        <Button asChild>
          <Link href={`${PATH.RESERVE}/${hospital.id}`}>예약하기</Link>
        </Button>
      </div>
    </div>
  );
};

export default HospitalCard;
