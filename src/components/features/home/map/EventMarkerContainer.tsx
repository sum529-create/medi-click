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
  const isInfoOpen = activeMarkerId === id;

  return (
    <MapMarker
      position={{ lat, lng }}
      onClick={() => setActiveMarkerId(isInfoOpen ? null : id)}
    >
      {isInfoOpen && <CustomOverlay name={name} id={id} />}
    </MapMarker>
  );
};

export default EventMarkerContainer;
