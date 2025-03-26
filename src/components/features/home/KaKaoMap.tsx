'use client';

import { debounce } from 'lodash-es';
import { useEffect, useMemo, useState } from 'react';
import { Map, MarkerClusterer } from 'react-kakao-maps-sdk';
import Loading from '@/components/common/Loading';
import Text from '@/components/ui/Text';
import { useAllHospitalLocation } from '@/hooks/map/useAllHospitalLocation';
import { useCurrentLocation } from '@/hooks/map/useCurrentLocation';
import { useKakaoLoad } from '@/hooks/map/useKakaoLoad';
import { useMapZoom } from '@/hooks/map/useMapZoom';
import { useHospitalStore } from '@/utils/zustand/useHospitalStore';
import KakaoMapContainer from './layout/KakaoMapContainer';
import CurrentLocationButton from './map/CurrentLocationButton';
import EventMarkerContainer from './map/EventMarkerContainer';
import ZoomButton from './map/ZoomButton';

const KaKaoMap = () => {
  /** constant */
  const DEBOUNCE_DELAY = 500;

  /** custom hook */
  const currentLocation = useCurrentLocation();
  const { mapRef, zoomIn, zoomOut } = useMapZoom();
  const hospitalLocationList = useAllHospitalLocation();

  /** state */
  const [loading, error] = useKakaoLoad();
  const [mapCenter, setMapCenter] = useState(currentLocation);
  const [mapLevel, setMapLevel] = useState(3);
  const [activeMarkerId, setActiveMarkerId] = useState<string | null>(null);
  const selectedHospital = useHospitalStore((state) => state.selectedHospital);

  /** function */
  useEffect(() => {
    if (selectedHospital) {
      setMapCenter(selectedHospital);
      setMapLevel(1);
      return;
    }

    setMapCenter(currentLocation);
  }, [selectedHospital, currentLocation]);

  // 지도를 움직일 때마다 해당 위치의 중심으로 좌표를 변경하는 함수
  const updateCenterWhenMapMoved = useMemo(
    () =>
      debounce((map: kakao.maps.Map) => {
        setMapCenter({
          lat: map.getCenter().getLat(),
          lng: map.getCenter().getLng(),
        });
      }, DEBOUNCE_DELAY),
    [],
  );

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
    <KakaoMapContainer>
      {/** 지도 */}
      <Map
        center={mapCenter}
        level={mapLevel}
        ref={mapRef}
        onCenterChanged={updateCenterWhenMapMoved}
        className='relative h-[300px] md:h-[750px]'
      >
        <MarkerClusterer averageCenter={true} minLevel={4}>
          {/** 마커 */}
          {hospitalLocationList.map((position) => (
            <EventMarkerContainer
              key={position.id}
              position={position}
              activeMarkerId={activeMarkerId}
              setActiveMarkerId={setActiveMarkerId}
            />
          ))}
        </MarkerClusterer>
        {/** 줌 인/아웃 버튼 + 현재 위치 버튼 */}
        <div className='absolute right-4 top-4 z-10 flex flex-col gap-4'>
          <ZoomButton zoomControls={{ zoomIn, zoomOut }} />
          <CurrentLocationButton
            currentLocation={currentLocation}
            setMapCenter={setMapCenter}
            setMapLevel={setMapLevel}
          />
        </div>
      </Map>
    </KakaoMapContainer>
  );
};

export default KaKaoMap;
