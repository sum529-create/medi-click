'use client';

import { StaticMap } from 'react-kakao-maps-sdk';
import { useDetailHospitalLocation } from '@/hooks/map/useDetailHospitalLocation';
import { useKakaoLoad } from '@/hooks/map/useKakaoLoad';
import Loading from './Loading';

// KakaoMapType 추가
interface KakaoMapType {
  params: {
    id: string; // 해당 병원의 id값
    name: string; // 해당 병원명
  };
}

const KakaoStaticMap = ({ params }: KakaoMapType) => {
  const staticLocation = useDetailHospitalLocation(params.id);

  const [loading, error] = useKakaoLoad();

  if (loading)
    return (
      <div className='flex-[2]'>
        <Loading size={180} />
      </div>
    );

  if (error)
    return (
      <div className='flex flex-[2] items-center justify-center'>
        지도를 불러오는데 오류가 발생하였습니다.
      </div>
    );

  return (
    <div className='relative w-full'>
      {staticLocation && (
        <StaticMap
          center={staticLocation}
          marker={[{ position: staticLocation, text: params.name }]}
          level={3}
          style={{
            height: '350px',
            width: '100%',
            boxSizing: 'border-box',
          }}
        />
      )}
    </div>
  );
};

export default KakaoStaticMap;
