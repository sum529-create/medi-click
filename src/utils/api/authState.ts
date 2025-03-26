import { useAuthStore } from '@/store/useAuthStore';
import { supabase } from '../supabase/supabase';
import { fetchUserData } from './auth';

// 현재 로그인 세션 가져오기
export const getSession = async () => {
  const { setUserData, setIsLogin } = useAuthStore.getState();

  try {
    const {
      data: { session },
      error,
    } = await supabase.auth.getSession();
    if (error || !session) {
      setIsLogin(false);
      return;
    }

    const user = await fetchUserData(session.user.id);
    if (user) {
      setUserData(user);
      setIsLogin(true);
    }
  } catch (error) {
    console.error('세션 확인 중 오류 발생:', error);
    setIsLogin(false);
  }
};

// 인증 상태 감지
export const listenAuthState = () => {
  const { setUserData, setIsLogin } = useAuthStore.getState();

  supabase.auth.onAuthStateChange(async (_, session) => {
    if (session) {
      const user = await fetchUserData(session.user.id);
      if (user) {
        setUserData(user);
        setIsLogin(true);
      }
    } else {
      setUserData({ id: '', email: '', name: '', phone: '', birth: '' });
      setIsLogin(false);
    }
  });
};
