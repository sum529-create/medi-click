'use client';

import { MapMarker } from 'react-kakao-maps-sdk';
import { Location } from '@/types/map';
import CustomOverlay from './CustomOverlay';

interface EventMarkerContainerProps {
  position: Location;
  activeMarkerId: string | null;
  setActiveMarkerId: (id: string | null) => void;
}

const EventMarkerContainer = ({
  position,
  activeMarkerId,
  setActiveMarkerId,
}: EventMarkerContainerProps) => {
  const { lat, lng, name, id } = position;
  const isOverlayOpen = activeMarkerId === id;

  return (
    <MapMarker
      position={{ lat, lng }}
      image={{
        src: '/img/map_marker.svg',
        size: {
          width: 30,
          height: 40,
        },
      }}
      clickable={true}
      onClick={() => setActiveMarkerId(isOverlayOpen ? null : id)}
    >
      {isOverlayOpen && <CustomOverlay name={name} id={id} />}
    </MapMarker>
  );
};

export default EventMarkerContainer;
