'use client';

import { Map, MapMarker } from 'react-kakao-maps-sdk';
import Loading from '@/components/common/Loading';
import { useDetailHospitalLocation } from '@/hooks/map/useDetailHospitalLocation';
import { useKakaoLoad } from '@/hooks/map/useKakaoLoad';

// KakaoMapType 추가 : 선택적 props값
interface KakaoMapType {
  params: {
    id: string;
  };
}

const KakaoMap = ({ params }: KakaoMapType) => {
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
    <div className='relative w-full flex-[2]'>
      {staticLocation && (
        <Map
          center={staticLocation}
          level={3}
          draggable={false}
          className='h-full w-full'
        >
          <MapMarker position={staticLocation} />
        </Map>
      )}
    </div>
  );
};

export default KakaoMap;
