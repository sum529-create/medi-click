'use client';

import Link from 'next/link';
import { PATH } from '@/constants/routerPath';
import { Tables } from '@/types/supabase';
import { Button } from '../../ui/button';
import Text from '../../ui/Text';
import Title from '../../ui/Title';
import HospitalCardContainer from './layout/HospitalCardContainer';

interface HospitalCardProps {
  hospital: Tables<'hospitals'>;
}

const HospitalCard = ({ hospital }: HospitalCardProps) => {
  return (
    <HospitalCardContainer hospital={hospital}>
      <div className='flex flex-col gap-1'>
        <Title>{hospital.name}</Title>
        <Text>{hospital.department}</Text>
      </div>
      <div className='flex justify-end'>
        <Button asChild>
          <Link
            href={`${PATH.RESERVE}/${hospital.id}`}
            onClick={(e) => e.stopPropagation()}
          >
            예약하기
          </Link>
        </Button>
      </div>
    </HospitalCardContainer>
  );
};

export default HospitalCard;
