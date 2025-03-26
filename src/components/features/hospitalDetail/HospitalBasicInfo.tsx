'use client';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import KakaoStaticMap from '@/components/common/KakaoStaticMap';
import Text from '@/components/ui/Text';
import Title from '@/components/ui/Title';
import { PATH } from '@/constants/routerPath';
import formatTelephoneNumber from '@/utils/func/formatTelephoneNumber';
import { Button } from '../../ui/button';

interface InfoParamsType {
  dutyAddr: string;
  dutyTel1: string;
  dutyName: string;
  department: string;
}

const HospitalBasicInfo = ({
  dutyAddr,
  dutyTel1,
  dutyName,
  department,
}: InfoParamsType) => {
  const { id } = useParams();
  const hospitalDetails = [
    { label: '주소', value: dutyAddr || '' },
    {
      label: '전화번호',
      value: dutyTel1.includes('-')
        ? dutyTel1
        : formatTelephoneNumber(dutyTel1.toString()) || '',
    },
  ];
  const textStyles = {
    subInfo: 'text-xl text-black02',
    title: 'text-3xl font-bold',
    button: 'max-w-[136px] mt-auto',
  };
  return (
    <div className='mb-[100px] flex flex-col justify-between gap-12 lg:flex-row'>
      <div className='flex flex-1 flex-col gap-6'>
        <Text size='xl' color='black02'>
          {department || ''}
        </Text>
        <Title tag='h2' size='xl' color='black01'>
          {dutyName || ''}
        </Title>
        {hospitalDetails.map((info) => (
          <Text key={info.label} size='xl' color='black02'>
            {info.label}: {info.value}
          </Text>
        ))}
        <div className={textStyles.button}>
          <Button size='lg' asChild>
            <Link href={`${PATH.RESERVE}/${id[0]}`}>예약하러가기 &gt;</Link>
          </Button>
        </div>
      </div>
      <div className='box-border flex h-[350px] flex-1 gap-5'>
        <KakaoStaticMap
          params={{ id: Array.isArray(id) ? id[0] : id, name: dutyName }}
        />
      </div>
    </div>
  );
};

export default HospitalBasicInfo;
