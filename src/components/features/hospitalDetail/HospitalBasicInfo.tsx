import Link from 'next/link';
import { useParams } from 'next/navigation';
import KakaoStaticMap from '@/components/common/KakaoStaticMap';
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
        <p className={textStyles.subInfo}>{department || ''}</p>
        <h3 className={textStyles.title}>{dutyName || ''}</h3>
        {hospitalDetails.map((info) => (
          <p key={info.label} className={textStyles.subInfo}>
            {info.label}: {info.value}
          </p>
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
