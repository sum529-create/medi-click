import { Metadata } from 'next';
import HospitalSection from '@/components/features/hospitalDetail/HospitalSection';
import hospitalDetail from '@/utils/api/hospitalDetail';

interface PageProps {
  params: { id: string[] };
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const id = params?.id[0];

  if (!id) {
    return { title: '병원 정보' };
  }

  try {
    const hospitalData = await hospitalDetail(id);

    return {
      title: hospitalData?.dutyName || '병원 정보',
      description: hospitalData?.dutyAddr || '병원 상세 정보',
      openGraph: {
        title: hospitalData?.dutyName || '병원 정보',
        description: hospitalData?.dutyAddr || '병원 상세 정보',
      },
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return { title: '병원 정보' };
  }
}

const HospitalDetailPage = ({ params }: PageProps) => {
  const hospitalId = params?.id[0];
  return <HospitalSection hpid={hospitalId} />;
};

export default HospitalDetailPage;
