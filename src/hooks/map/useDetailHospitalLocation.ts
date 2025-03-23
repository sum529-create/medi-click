import { useEffect, useState } from 'react';
import { Location } from '@/types/map';
import { getHospitalDetailLocation } from '@/utils/api/hospitalDetail';

export const useDetailHospitalLocation = (id: string) => {
  const [hospitalLocation, setHospitalLocation] = useState<Location>();

  useEffect(() => {
    const fetchDetailHospitalLocation = async () => {
      try {
        const hospitalDetailLocation = await getHospitalDetailLocation(id);
        if (hospitalDetailLocation) {
          setHospitalLocation(hospitalDetailLocation);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchDetailHospitalLocation();
  }, []);

  return hospitalLocation;
};
