import { useRef } from 'react';

export const useMapZoom = () => {
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

  return { mapRef, zoomIn, zoomOut };
};
