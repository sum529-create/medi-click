import { TABLE } from '@/constants/supabaseTables';
import { Location } from '@/types/map';
import { Tables } from '@/types/supabase';
import { supabase } from '../supabase/supabase';

/**
 * 모든 병원의 위치(위도, 경도, 이름, id)를 반환하는 함수
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
        .select('lat, lng, name, id')
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
 * 모든 병원의 정보를 페이지 단위로 10개씩 반환하는 함수
 * 무한스크롤 기능을 위한 코드
 * @returns allHospitalData - 모든 병원의 기본 정보
 */
export const getAllHospitalData = async (
  pageParam: number,
  searchKeyword: string,
): Promise<Tables<'hospitals'>[]> => {
  try {
    const pageSize = 10;
    const start = (pageParam - 1) * pageSize;
    const end = start + pageSize - 1;

    let query = supabase.from(TABLE.HOSPITALS).select('*');

    // 검색창에 키워드가 입력되면, 해당 키워드를 가진 병원 목록을 찾음
    if (searchKeyword) {
      query = query.ilike('name', `%${searchKeyword}%`);
    }

    // 검색창에 키워드가 없으면, 전체 병원 목록을 반환함
    const { data: hospitalData, error } = await query.range(start, end);

    if (error) throw error;

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
