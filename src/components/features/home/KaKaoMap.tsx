'use client';

import { useEffect, useRef, useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa6';
import { Map } from 'react-kakao-maps-sdk';
import Loading from '@/components/common/Loading';
import { Button } from '@/components/ui/button';
import Text from '@/components/ui/Text';
import { useAllHospitalLocation } from '@/hooks/map/useAllHospitalLocation';
import { useCurrentLocation } from '@/hooks/map/useCurrentLocation';
import { useKakaoLoad } from '@/hooks/map/useKakaoLoad';
import { useHospitalStore } from '@/utils/zustand/useHospitalStore';
import EventMarkerContainer from './EventMarkerContainer';

const KaKaoMap = () => {
  /** custom hook */
  const currentLocation = useCurrentLocation();
  const hospitalLocationList = useAllHospitalLocation();

  /** state */
  const [loading, error] = useKakaoLoad();
  const [mapCenter, setMapCenter] = useState(currentLocation);
  const [mapLevel, setMapLevel] = useState(3);
  const [activeMarkerId, setActiveMarkerId] = useState<string | null>(null);
  const selectedHospital = useHospitalStore((state) => state.selectedHospital);

  const mapRef = useRef<kakao.maps.Map>(null);

  const zoomIn = () => {
    const map = mapRef.current;
    if (!map) return;
    map.setLevel(map.getLevel() - 1);
  };

  const zoomOut = () => {
    const map = mapRef.current;
    if (!map) return;
    map.setLevel(map.getLevel() + 1);
  };

  useEffect(() => {
    if (selectedHospital) {
      setMapCenter(selectedHospital);
      setMapLevel(1);
    }
  }, [selectedHospital]);

  /** UI */
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
      <Map
        center={mapCenter}
        level={mapLevel}
        ref={mapRef}
        className='relative h-[300px] md:h-[750px]'
      >
        {/** 마커 */}
        {hospitalLocationList.map((position) => (
          <EventMarkerContainer
            key={position.id}
            position={position}
            activeMarkerId={activeMarkerId}
            setActiveMarkerId={setActiveMarkerId}
          />
        ))}
        {/** 줌인/아웃 버튼 */}
        <div className='absolute right-4 top-4 z-10 flex flex-col gap-1 shadow-md'>
          <Button variant='outline' size='icon' onClick={zoomIn}>
            <FaPlus />
          </Button>
          <Button variant='outline' size='icon' onClick={zoomOut}>
            <FaMinus />
          </Button>
        </div>
      </Map>
    </div>
  );
};

export default KaKaoMap;
