'use client';

import Link from 'next/link';
import { useState } from 'react';
import { MapMarker } from 'react-kakao-maps-sdk';
import { Button } from '@/components/ui/button';
import Title from '@/components/ui/Title';
import { PATH } from '@/constants/routerPath';
import { Location } from '@/types/map';

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
      {isInfoOpen && (
        <div className='flex h-[100px] w-[150px] flex-col items-center justify-center gap-2'>
          <Title>{name}</Title>
          <Button asChild>
            <Link href={`${PATH.HOSPITAL}/${id}`}>더보기</Link>
          </Button>
        </div>
      )}
    </MapMarker>
  );
};

export default EventMarkerContainer;
