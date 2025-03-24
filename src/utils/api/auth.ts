import { supabase } from '../supabase/supabase';

interface FormData {
  email: string;
  password: string;
  name: string;
  phone: string;
  birth: string;
  role: string;
}

export const signUp = async (formData: FormData) => {
  await supabase.auth.signUp({
    email: formData.email,
    password: formData.password,
    options: {
      data: {
        name: formData.name,
        phone_number: formData.phone,
        birth: formData.birth,
        role: formData.role,
      },
    },
  });
};

export const login = async (formData: FormData) => {
  await supabase.auth.signInWithPassword({
    email: formData.email,
    password: formData.password,
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
