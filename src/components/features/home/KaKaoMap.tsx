'use client';

import { useEffect, useState } from 'react';
import { Map } from 'react-kakao-maps-sdk';
import Loading from '@/components/common/Loading';
import Text from '@/components/ui/Text';
import { useAllHospitalLocation } from '@/hooks/map/useAllHospitalLocation';
import { useCurrentLocation } from '@/hooks/map/useCurrentLocation';
import { useKakaoLoad } from '@/hooks/map/useKakaoLoad';
import { useHospitalStore } from '@/utils/zustand/useHospitalStore';
import EventMarkerContainer from './EventMarkerContainer';

const KaKaoMap = () => {
  const currentLocation = useCurrentLocation();
  const hospitalLocationList = useAllHospitalLocation();
  const selectedHospital = useHospitalStore((state) => state.selectedHospital);

  const [mapCenter, setMapCenter] = useState(currentLocation);
  const [activeMarkerId, setActiveMarkerId] = useState<string | null>(null);
  const [loading, error] = useKakaoLoad();

  useEffect(() => {
    if (selectedHospital) {
      setMapCenter(selectedHospital);
    }
  }, [selectedHospital]);

  if (loading)
    return (
      <div className='h-[300px] flex-[2] border-2 md:h-[750px]'>
        <Loading size={180} />
      </div>
    );

  if (error)
    return (
      <div className='flex h-[300px] flex-[2] items-center justify-center border-2 md:h-[750px]'>
        <Text>지도를 불러오는데 오류가 발생하였습니다.</Text>
      </div>
    );

  return (
    <div className='relative w-full flex-[2] border-2'>
      <Map center={mapCenter} level={3} className='h-[300px] md:h-[750px]'>
        {hospitalLocationList.map((position) => (
          <EventMarkerContainer
            key={position.id}
            position={position}
            activeMarkerId={activeMarkerId}
            setActiveMarkerId={setActiveMarkerId}
          />
        ))}
      </Map>
    </div>
  );
};

export default KaKaoMap;
