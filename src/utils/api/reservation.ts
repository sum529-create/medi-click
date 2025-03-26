import { toast } from 'react-toastify';
import { COLUMN, TABLE } from '@/constants/supabaseTables';
import { ReservationProps } from '@/types/components/mypage/reservation.type';
import { Tables } from '@/types/supabase';
import { supabase } from '../supabase/supabaseClient';
/**
 * supabase에서 현재 로그인 된 사용자의 모든 예약 리스트를 불러오는 api 함수입니다.
 * @param { string | undefined } id - session에서 받아온 현재 로그인 된 사용자의 아이디
 * @returns { Promise<ReservationProps['reservation'][]> } 현재 로그인 된 유저의 모든 예약 리스트
 */
export const getReservationList = async (
  id: string | undefined,
): Promise<ReservationProps['reservation'][]> => {
  const { data, error } = await supabase
    .from(TABLE.RESERVATIONS)
    .select(`* , ${TABLE.HOSPITALS}(*)`)
    .eq(COLUMN.USER_ID, id);

  if (error) throw new Error('예약 목록 불러오기에 실패했습니다.');

  return data;
};

/**
 * supabase에서 선택한 예약의 상세정보를 가져오는 api 함수입니다.
 * @param { number } id - 선택한 예약 정보의 고유 아이디
 * @returns { Promise<ReservationProps['reservation']> } 선택한 예약의 상세 정보
 */
export const getReservationDetail = async (
  id: string,
): Promise<ReservationProps['reservation']> => {
  const { data, error } = await supabase
    .from(TABLE.RESERVATIONS)
    .select(`* , ${TABLE.HOSPITALS}(*)`)
    .eq(COLUMN.ID, Number(id))
    .single();

  if (error) throw new Error('예약 상세 페이지 불러오기에 실패했습니다.');

  return data;
};

/**
 * 선택한 예약 정보를 삭제하는 api 함수입니다.
 * @param { number } id - 삭제하고자 하는 예약 정보의 아이디
 */
export const deleteReservation = async (id: number): Promise<void> => {
  const { error } = await supabase
    .from(TABLE.RESERVATIONS)
    .delete()
    .eq(COLUMN.ID, id);
  if (error) toast.error('예약 삭제에 실패했습니다.');
};

/**
 * 선택한 예약의 정보를 수정하는 api 함수입니다.
 * @param { number } id - 수정하고자 하는 예약 정보의 아이디
 * @param { time } time - 변경할 시간
 * @param { date } date - 변경할 날짜
 * @param { string | null } memo - 변경할 증상 메모
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

  if (error) toast.error('예약 수정에 실패했습니다.');
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
