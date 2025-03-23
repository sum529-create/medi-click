import { TABLE } from '@/constants/supabaseTables';
import { Location } from '@/types/map';
import { Tables } from '@/types/supabase';
import { supabase } from '../supabase/supabase';

/**
 * 모든 병원의 위치(위도, 경도)를 반환하는 함수
 * @returns allHospitalLocations - 모든 병원의 위치(위도, 경도) 정보
 */
export const getAllHospitalLocation = async () => {
  try {
    let allHospitalLocations: Location[] = [];
    let page = 0;
    const pageSize = 100;

    while (true) {
      const start = page * pageSize;
      const end = start + pageSize - 1;

      const { data, error } = await supabase
        .from(TABLE.HOSPITALS)
        .select('lat, lng')
        .range(start, end);

      if (error) throw error;
      if (!data || data.length === 0) break;

      allHospitalLocations = [...allHospitalLocations, ...data];
      page++;
    }

    return allHospitalLocations;
  } catch (error) {
    console.error('병원 데이터 불러오기 오류', error);
  }
};

/**
 * 모든 병원의 정보를 반환하는 함수
 * @returns allHospitalData - 모든 병원의 기본 정보
 */
export const getAllHospitalData = async () => {
  try {
    let allHospitalData: Tables<'hospitals'>[] = [];
    let page = 0;
    const pageSize = 100;

    while (true) {
      const start = page * pageSize;
      const end = start + pageSize - 1;

      const { data, error } = await supabase
        .from(TABLE.HOSPITALS)
        .select('*')
        .range(start, end);

      if (error) throw error;
      if (!data || data.length === 0) break;

      allHospitalData = [...allHospitalData, ...data];
      page++;
    }

    return allHospitalData;
  } catch (error) {
    console.error('병원 데이터 불러오기 오류', error);
  }
};

/**
 * 지정한 id값의 병원 위치(위도, 경도)를 반환하는 함수
 * @param id string : hpid
 * @returns hospitalLocation - 지정한 id값의 병원 위치(위도, 경도) 정보
 */
export const getHospitalDetailLocation = async (id: string) => {
  try {
    let hospitalLocation: Location = { lat: 0, lng: 0 };

    const { data, error } = await supabase
      .from(TABLE.HOSPITALS)
      .select('lat, lng')
      .eq('id', id);

    if (error) throw error;
    if (!data || data.length === 0) return null;

    const location = data[0];

    hospitalLocation = { lat: location.lat, lng: location.lng };
    console.log(hospitalLocation);

    return hospitalLocation;
  } catch (error) {
    console.error('병원 상세 위치정보 불러오기 오류');
  }
};
