'use client';

import { useState } from 'react';
import { MapMarker } from 'react-kakao-maps-sdk';
import { Location } from '@/types/map';
import CustomOverlay from './CustomOverlay';

interface EventMarkerContainerProps {
  position: Location;
}

const EventMarkerContainer = ({ position }: EventMarkerContainerProps) => {
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const { lat, lng, name, id } = position;

  return (
    <MapMarker
      position={{ lat, lng }}
      onClick={() => setIsInfoOpen((prev) => !prev)}
    >
      {isInfoOpen && <CustomOverlay name={name} id={id} />}
    </MapMarker>
  );
};

export default EventMarkerContainer;
