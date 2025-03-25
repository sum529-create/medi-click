import { COLUMN, TABLE } from '@/constants/supabaseTables';
import { Reservation } from '@/types/components/mypage/reservation.type';
import { supabase } from '../supabase/supabase';

const testId: string = '0d6511b9-926b-443f-9828-39e5f302e1e4'; // zustand 또는 로그인 세션에서 받아올 현재 로그인 된 유저 아이디 값

/**
 * supabase에서 현재 로그인 된 사용자의 모든 예약 리스트를 불러오는 api 함수입니다.
 * id는 주스탠드나 로그인 세션에 있을 값을 가져오는 것으로 수정 예정입니다.
 * @returns { data } 현재 로그인 된 유저의 모든 예약 리스트
 */
export const getReservationList = async (): Promise<Reservation[]> => {
  const { data, error } = await supabase
    .from(TABLE.RESERVATIONS)
    .select(`* , ${TABLE.HOSPITALS}(*)`)
    .eq(COLUMN.USER_ID, testId);

  if (error) throw new Error('예약 목록 불러오기에 실패했습니다.');

  return data;
};

/**
 * supabase에서 선택한 예약의 상세정보를 가져오는 api 함수입니다.
 * @param { number } pathId :
 * @returns { data } 현재 로그인 된 유저의 모든 예약 리스트
 */
export const getReservationDetail = async (
  pathId: string,
): Promise<Reservation> => {
  const { data, error } = await supabase
    .from(TABLE.RESERVATIONS)
    .select(`* , ${TABLE.HOSPITALS}(*)`)
    .eq(COLUMN.ID, Number(pathId))
    .single();

  if (error) throw new Error('예약 상세 페이지 불러오기에 실패했습니다.');

  return data;
};

/**
 * 선택한 예약 정보를 삭제하는 함수입니다.
 */
export const deleteReservation = async (id: number): Promise<void> => {
  const { error } = await supabase
    .from(TABLE.RESERVATIONS)
    .delete()
    .eq(COLUMN.ID, id);
  if (error) throw new Error('예약 삭제에 실패했습니다.');
};
