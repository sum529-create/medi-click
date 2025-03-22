'use client';

import Link from 'next/link';
import { PATH } from '@/constants/routerPath';
import { Tables } from '@/types/supabase';
import { Button } from '../ui/button';

interface HospitalCardProps {
  hospital: Tables<'hospitals'>;
}

const HospitalCard = ({ hospital }: HospitalCardProps) => {
  //임의로 설정해둔 병원 아이디입니다
  const hospitalId = '123';

  return (
    <div className='flex min-h-[120px] flex-col gap-2 rounded-xl border-2 border-main bg-white p-6'>
      <div className='flex flex-col gap-1'>
        <h1 className='text-lg font-bold'>{hospital.name}</h1>
        <h1 className='text-sm'>{hospital.department}</h1>
      </div>
      <div className='flex justify-end'>
        <Button asChild>
          <Link href={`${PATH.RESERVE}/${hospitalId}`}>예약하기</Link>
        </Button>
      </div>
    </div>
  );
};

export default HospitalCard;
