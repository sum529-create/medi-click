'use client';

import { useEffect, useState } from 'react';
import { Location } from '@/types/map';

/**
 * 사용자의 현재 위치(위도, 경도)를 반환하는 훅
 * @returns currentLocation - 사용자의 현재 위도, 경도
 */
export const useCurrentLocation = () => {
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

  return currentLocation;
};
