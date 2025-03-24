// import { Session } from '@supabase/supabase-js';
import { COLUMN, TABLE } from '@/constants/supabaseTables';
import { Database } from '@/types/supabase';
import { supabase } from '../supabase/supabase';

const testId: string = '0d6511b9-926b-443f-9828-39e5f302e1e4'; // zustand 또는 로그인 세션에서 받아올 현재 로그인 된 유저 아이디 값

type ProfileData = Database['public']['Tables']['users']['Row'] | null;

/**
 * supabase에서 현재 로그인 된 사용자의 회원 정보를 불러오는 api 함수입니다.
 * id는 주스탠드나 로그인 세션에 있을 값을 가져오는 것으로 수정 예정입니다.
 * @returns { data } 현재 로그인 된 유저 정보
 */
export const getUserProfile = async (): Promise<ProfileData> => {
  const { data, error } = await supabase
    .from(TABLE.USERS)
    .select('*')
    .eq(COLUMN.ID, testId)
    .single();
  if (error) console.log('유저 프로필 받아오기 실패', error);

  return data;
};

/**
 * 로그인 된 사용자의 회원 정보를 수정하는 api 함수입니다.
 * id는 주스탠드나 로그인 세션에 있을 값을 가져오는 것으로 수정 예정입니다.
 */
export const updateUserProfile = async (
  updatedPhoneNumber: string,
): Promise<void> => {
  const { error } = await supabase
    .from(TABLE.USERS)
    .update({ phone_number: updatedPhoneNumber })
    .eq(COLUMN.ID, testId);
  if (error) console.log('error', error);
};
