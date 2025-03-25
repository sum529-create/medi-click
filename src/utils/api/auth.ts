import { TABLE } from '@/constants/supabaseTables';
import { supabase } from '../supabase/supabase';

interface FormData {
  email: string;
  password: string;
  name: string;
  phone: string;
  birth: string;
}

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
    } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      console.error('회원가입 중 오류 발생:', error.message);
      return error.message;
    }

    const { error: dbError } = await supabase.from(TABLE.USERS).insert({
      id: user?.id,
      email,
      name,
      phone_number: phone,
      birth,
    });

    if (dbError) {
      console.error('데이터베이스에 저장 중 오류 발생', dbError.message);
      return dbError.message;
    }

    return error;
  } catch (error) {
    console.error('회원가입 중 오류 발생:', error);
    return;
  }
};

export const logIn = async ({ email, password }: FormData) => {
  return await supabase.auth.signInWithPassword({
    email,
    password,
  });
};

export const logOut = async () => {
  await supabase.auth.signOut();
};

export const getSession = async (setIsLogin: (value: boolean) => void) => {
  try {
    const {
      data: { session },
    } = await supabase.auth.getSession();

    console.log('SESSION =>', session); // 로그인이 되어있는지 상태 확인용
    setIsLogin(!!session);
  } catch (error) {
    console.error('세션 확인 중 오류 발생:', error);
    setIsLogin(false);
  }
};
