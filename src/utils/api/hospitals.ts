import {
  NEXT_SERVER_HOSPITAL_LOCATION,
  NEXT_SERVER_HOSPITALS,
} from '@/constants/apiUrl';
import { TABLE } from '@/constants/supabaseTables';
import { Tables } from '@/types/supabase';
import { supabase } from '../supabase/supabaseClient';

/**
 * 모든 병원의 위치(위도, 경도, 이름, id)를 반환하는 함수
 * @returns allHospitalLocations - 모든 병원의 위치(위도, 경도) 정보
 */
export const getAllHospitalLocation = async () => {
  try {
    const response = await fetch(NEXT_SERVER_HOSPITAL_LOCATION);

    if (!response.ok) {
      throw new Error('병원 위치 데이터를 불러오는데 실패하였습니다.');
    }

    const hospitalLocationList = await response.json();
    return hospitalLocationList;
  } catch (error) {
    console.error('병원 데이터 불러오기 오류', error);
  }
};

/**
 * 모든 병원의 정보를 페이지 단위로 10개씩 반환하는 함수
 * 무한스크롤 기능을 위한 코드
 * @returns allHospitalData - 모든 병원의 기본 정보
 */
export const getAllHospitalData = async (
  pageParam: number,
  searchKeyword: string,
): Promise<Tables<'hospitals'>[]> => {
  try {
    const response = await fetch(
      `${NEXT_SERVER_HOSPITALS}?page=${pageParam}&search=${encodeURIComponent(searchKeyword)}`,
    );

    if (!response.ok) {
      throw new Error('병원 데이터를 불러오는데 실패하였습니다.');
    }

    const hospitalData = await response.json();
    return hospitalData;
  } catch (error) {
    console.error('병원 데이터 불러오기 오류', error);
    return [];
  }
};

/**
 * 병원의 id를 토대로 병원의 이름과 영업시간을 받아오는 함수
 *
 * @param id - 병원 id
 * @returns 병원 이름, 병원 영업시간
 */

export const getHospitalName = async (id: string) => {
  try {
    const { data, error } = await supabase
      .from(TABLE.HOSPITALS)
      .select('name, operation_time')
      .eq('id', id)
      .single();

    if (error) throw error;

    const { name, operation_time } = data;
    const operationTime = JSON.parse(JSON.stringify(operation_time));
    return { name, operationTime };
  } catch (error) {
    console.error(error);
  }
};
