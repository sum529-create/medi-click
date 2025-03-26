import { TABLE } from '@/constants/supabaseTables';
import { supabase } from '../supabase/supabaseClient';

interface FormData {
  email: string;
  password: string;
  name?: string;
  phone?: string;
  birth?: string;
}

// 회원가입 함수
export const signUp = async ({
  email,
  password,
  name,
  phone,
  birth,
}: FormData) => {
  try {
    const {
      data: { user },
      error,
    } = await supabase.auth.signUp({ email, password });

    if (error) return console.error('회원가입 중 오류 발생:', error.message);

    const { error: dbError } = await supabase.from(TABLE.USERS).insert({
      id: user?.id,
      email,
      name,
      phone_number: phone,
      birth,
    });

    if (dbError)
      return console.error('데이터베이스에 저장 중 오류 발생', dbError.message);

    return null;
  } catch (error) {
    return console.error('회원가입 오류:', error);
  }
};

// 로그인 함수
export const logIn = async ({ email, password }: FormData) => {
  return await supabase.auth.signInWithPassword({ email, password });
};

// 로그아웃 함수
export const logOut = async () => {
  await supabase.auth.signOut();
};

// 유저 데이터 가져오기
export const fetchUserData = async (userId: string) => {
  const { data: user, error } = await supabase
    .from(TABLE.USERS)
    .select('*')
    .eq('id', userId)
    .maybeSingle();

  if (error)
    return console.error('데이터를 가져오는 중 오류 발생', error.message);
  return user;
};
