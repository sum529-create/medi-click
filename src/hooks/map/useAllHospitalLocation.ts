import { useEffect, useState } from 'react';
import type { Location } from '@/types/map';
import { getAllHospitalLocation } from '@/utils/api/hospitals';

/**
 * 모든 병원의 위치를 반환하는 훅
 * @returns hospitalLocationList
 */
export const useAllHospitalLocation = () => {
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

  return hospitalLocationList;
};
