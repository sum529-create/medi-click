import { supabase } from '../supabase/supabase';

interface FormData {
  email: string;
  password: string;
  name: string;
  phone: string;
  birth: string;
  role: string;
}

export const signUp = async ({
  email,
  password,
  name,
  phone,
  birth,
  role,
}: FormData) => {
  await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        name,
        phone_number: phone,
        birth,
        role,
      },
    },
  });
};

export const login = async ({ email, password }: FormData) => {
  await supabase.auth.signInWithPassword({
    email,
    password,
  });
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
