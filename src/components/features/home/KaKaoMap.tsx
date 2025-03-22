'use client';

import { useEffect, useState } from 'react';
import { Map } from 'react-kakao-maps-sdk';
import Loading from '@/components/common/Loading';
import { useKakaoLoad } from '@/hooks/map/useKakaoLoad';
import { Location } from '@/types/map';

const KaKaoMap = () => {
  const [currentLocation, setCurrentLocation] = useState<Location>({
    lat: 33.450701,
    lng: 126.570667,
  });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setCurrentLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      });
    } else {
      setCurrentLocation((prev) => ({ ...prev }));
    }
  }, []);

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
      <Map center={currentLocation} level={3} className='h-full w-full' />
    </div>
  );
};

export default KaKaoMap;
