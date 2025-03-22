'use client';

import { useEffect, useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import Loading from '@/components/common/Loading';
import { useCurrentLocation } from '@/hooks/map/useCurrentLocation';
import { useKakaoLoad } from '@/hooks/map/useKakaoLoad';
import { Location } from '@/types/map';
import { getAllHospitalLocation } from '@/utils/api/hospitals';

const KaKaoMap = () => {
  const currentLocation = useCurrentLocation();

  const [loading, error] = useKakaoLoad();

  const [hospitalLocationList, setHospitalLocationList] = useState<Location[]>(
    [],
  );

  useEffect(() => {
    const fetchAllHospitalLocation = async () => {
      try {
        const allHospitalLocation = await getAllHospitalLocation();
        if (allHospitalLocation) {
          setHospitalLocationList(allHospitalLocation);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchAllHospitalLocation();
  }, []);

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
