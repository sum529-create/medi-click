'use client';

import { Map, MapMarker } from 'react-kakao-maps-sdk';
import Loading from '@/components/common/Loading';
import { useAllHospitalLocation } from '@/hooks/map/useAllHospitalLocation';
import { useCurrentLocation } from '@/hooks/map/useCurrentLocation';
import { useKakaoLoad } from '@/hooks/map/useKakaoLoad';

const KaKaoMap = () => {
  const currentLocation = useCurrentLocation();
  const hospitalLocationList = useAllHospitalLocation();

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
      <Map center={currentLocation} level={3} className='h-full w-full'>
        {hospitalLocationList.map((position, idx) => {
          return <MapMarker key={idx} position={position} />;
        })}
      </Map>
    </div>
  );
};

export default KaKaoMap;
