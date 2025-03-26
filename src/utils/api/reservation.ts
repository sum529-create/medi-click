import { COLUMN, TABLE } from '@/constants/supabaseTables';
import { ReservationProps } from '@/types/components/mypage/reservation.type';
import { Tables } from '@/types/supabase';
import { supabase } from '../supabase/supabaseClient';

const testId: string = '833a3cf8-fceb-455d-87f0-4d7aa341213c'; // zustand 또는 로그인 세션에서 받아올 현재 로그인 된 유저 아이디 값

/**
 * supabase에서 현재 로그인 된 사용자의 모든 예약 리스트를 불러오는 api 함수입니다.
 * id는 주스탠드나 로그인 세션에 있을 값을 가져오는 것으로 수정 예정입니다.
 * @returns { data } 현재 로그인 된 유저의 모든 예약 리스트
 */
export const getReservationList = async (): Promise<
  ReservationProps['reservation'][]
> => {
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
): Promise<ReservationProps['reservation']> => {
  const { data, error } = await supabase
    .from(TABLE.RESERVATIONS)
    .select(`* , ${TABLE.HOSPITALS}(*)`)
    .eq(COLUMN.ID, Number(pathId))
    .single();

  if (error) throw new Error('예약 상세 페이지 불러오기에 실패했습니다.');

  return data;
};

/**
 * 선택한 예약 정보를 삭제하는 api 함수입니다.
 */
export const deleteReservation = async (id: number): Promise<void> => {
  const { error } = await supabase
    .from(TABLE.RESERVATIONS)
    .delete()
    .eq(COLUMN.ID, id);
  if (error) throw new Error('예약 삭제에 실패했습니다.');
};

/**
 * 기등록 된 예약 정보를 수정하는 api 함수입니다.
 */
export const updateReservation = async (
  id: number,
  time: string,
  date: string,
  memo: string | null,
) => {
  const { error } = await supabase
    .from(TABLE.RESERVATIONS)
    .update({ date, time, memo })
    .eq('id', id);

  if (error) throw new Error('예약 정보 수정에 실패했습니다.');
};

export const insertReservationInfo = async (info: Tables<'reservations'>) => {
  const { error } = await supabase.from(TABLE.RESERVATIONS).insert(info);
  return error;
};

export const fetchReservationDate = async (id: string, date: string) => {
  const { data } = await supabase
    .from(TABLE.RESERVATIONS)
    .select('time')
    .eq('hospital_id', id)
    .eq('date', date);

  return data;
};
