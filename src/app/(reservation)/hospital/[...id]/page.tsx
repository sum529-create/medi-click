import { Metadata } from 'next';
import { Suspense } from 'react';
import Loading from '@/components/common/Loading';
import ErrorState from '@/components/features/hospitalDetail/ErrorState';
import HospitalSection from '@/components/features/hospitalDetail/HospitalSection';
import hospitalDetail, {
  getAllHospitalDetailData,
} from '@/utils/api/hospitalDetail';

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

const HospitalDetailPage = async ({ params }: PageProps) => {
  const STATE_WRAPPER_STYLE =
    'flex h-[calc(100vh-80px)] w-full items-center justify-center';
  const hospitalId = params?.id[0];
  try {
    const { hospitalData, infoData, reviewData } =
      await getAllHospitalDetailData(hospitalId);
    return (
      <Suspense
        fallback={
          <div className={STATE_WRAPPER_STYLE}>
            <Loading size={100} />
          </div>
        }
      >
        <HospitalSection
          hospitalData={hospitalData}
          infoData={infoData}
          reviewData={reviewData}
        />
      </Suspense>
    );
  } catch (error) {
    console.error('failed fetching hospital detail data', error);
    return (
      <div className={STATE_WRAPPER_STYLE}>
        <ErrorState>{'병원 정보를 불러오는 데 실패했습니다'}</ErrorState>
      </div>
    );
  }
};

export default HospitalDetailPage;
