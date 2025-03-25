import { COLUMN, TABLE } from '@/constants/supabaseTables';
import { Tables } from '@/types/supabase';
import { createClient } from '../supabase/supabaseClient';

const supabase = createClient();

const testId: string = '0d6511b9-926b-443f-9828-39e5f302e1e4'; // zustand 또는 로그인 세션에서 받아올 현재 로그인 된 유저 아이디 값

type Reservation = Tables<'reservations'> & {
  hospitals: Tables<'hospitals'>;
};

/**
 * supabase에서 현재 로그인 된 사용자의 모든 예약 리스트를 불러오는 api 함수입니다.
 * id는 주스탠드나 로그인 세션에 있을 값을 가져오는 것으로 수정 예정입니다.
 * @returns { data } 현재 로그인 된 유저의 모든 예약 리스트
 */
export const getReservationList = async (): Promise<Reservation[] | null> => {
  const { data, error } = await supabase
    .from(TABLE.RESERVATIONS)
    .select(`* , ${TABLE.HOSPITALS}(*)`)
    .eq(COLUMN.USER_ID, testId);
  if (error) console.log('예약 리스트 가져오기 실패', error);

  return data;
};
