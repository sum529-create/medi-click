import { TABLE } from '@/constants/supabaseTables';
import { useAuthStore } from '@/store/useAuthStore';
import { supabase } from '../supabase/supabase';

interface FormData {
  email: string;
  password: string;
  name: string;
  phone: string;
  birth: string;
}

// 회원가입을 처리하는 함수
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

// 로그인을 처리하는 함수
export const logIn = async ({ email, password }: FormData) => {
  return await supabase.auth.signInWithPassword({
    email,
    password,
  });
};

// 로그아웃을 처리하는 함수
export const logOut = async () => {
  await supabase.auth.signOut();
};

export const listenAuthState = () => {
  const setUser = useAuthStore.getState().setUserData;
  const setIsLogin = useAuthStore.getState().setIsLogin;

  supabase.auth.onAuthStateChange(async (_, session) => {
    if (session) {
      const userId = session.user.id;

      const { data: userData, error } = await supabase
        .from(TABLE.USERS)
        .select()
        .eq('id', userId)
        .maybeSingle();

      if (error) {
        console.error('유저 정보 불러오기 실패:', error.message);
        return;
      }
      console.log('🚀 ~ supabase.auth.onAuthStateChange ~ userData:', userData);

      setUser({
        email: session.user.user_metadata.email,
        name: session.user.user_metadata.name,
        phone: session.user.user_metadata.phone_number,
        birth: session.user.user_metadata.birth,
      });

      setIsLogin(true);
    } else {
      setUser({
        email: '',
        name: '',
        phone: '',
        birth: '',
      });
      setIsLogin(false);
    }
  });
};
