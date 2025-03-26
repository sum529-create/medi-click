// import { Session } from '@supabase/supabase-js';
import { COLUMN, TABLE } from '@/constants/supabaseTables';
import { Tables } from '@/types/supabase';
import { supabase } from '../supabase/supabaseClient';

interface ProfileData {
  profile: Tables<'users'>;
}

/**
 * supabase에서 현재 로그인 된 사용자의 회원 정보를 불러오는 api 함수입니다.
 * @param { string | undefined } id - session에서 받아온 현재 로그인 된 사용자의 아이디
 * @returns { Promise<ProfileData['profile']> } -  현재 로그인 된 유저 정보
 */
export const getUserProfile = async (
  id: string | undefined,
): Promise<ProfileData['profile']> => {
  const { data, error } = await supabase
    .from(TABLE.USERS)
    .select('*')
    .eq(COLUMN.ID, id)
    .single();
  if (error) throw new Error('사용자 정보 불러오기를 실패했습니다.');

  return data;
};

/**
 * 로그인 된 사용자의 회원 정보를 수정하는 api 함수입니다.
 * @param { string | undefined } id - session에서 받아온 현재 로그인 된 사용자의 아이디
 * @param { string } updatedPhoneNumber - 변경하고자 하는 연락처
 */
export const updateUserProfile = async (
  updatedPhoneNumber: string,
  id: string | undefined,
): Promise<void> => {
  const { error } = await supabase
    .from(TABLE.USERS)
    .update({ phone_number: updatedPhoneNumber })
    .eq(COLUMN.ID, id);
  if (error) throw new Error('사용자 정보 변경에 실패했습니다.');
};
