import { useEffect, useState } from 'react';
import { Location } from '@/types/map';
import { getAllHospitalLocation } from '@/utils/api/hospitals';

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
