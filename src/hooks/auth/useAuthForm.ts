import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { MODE } from '@/constants/authMode';
import { PATH } from '@/constants/routerPath';
import { cn } from '@/lib/utils';
import { logIn, signUp } from '@/utils/api/auth';
import { listenAuthState } from '@/utils/api/authState';
import { isHospitalAccount } from '@/utils/func/isHospitalAccount';
import { useAccountStore } from '@/utils/zustand/useAccountStore';
import { useAuthStore } from '@/utils/zustand/useAuthStore';

export const useAuthForm = (mode: string) => {
  const router = useRouter();

  const setIsLogin = useAuthStore((state) => state.setIsLogin);
  const setIsHospitalAccount = useAccountStore(
    (state) => state.setIsHospitalAccount,
  );

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    phone: '',
    birth: '',
  });

  // 사용자가 입력 필드 값을 변경할 때 호출되는 함수
  const handleAuthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // 로그인 또는 회원가입 폼 제출 시 호출되는 함수
  const handleAuthSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (mode === MODE.SIGNUP) {
      const signUpError = await signUp(formData);

      if (signUpError) {
        toast.error('이미 사용 중인 이메일입니다.');
        return;
      }

      setIsLogin(true);
      listenAuthState();
      toast.success('회원가입이 완료되었습니다.');
      router.push(PATH.HOME);
    } else {
      const { error: loginError } = await logIn(formData);

      if (loginError) {
        toast.error('아이디나 비밀번호가 틀렸습니다.');
        return;
      }

      if (isHospitalAccount(formData.email)) setIsHospitalAccount(true);
      setIsLogin(true);
      listenAuthState();
      router.push(PATH.HOME);
    }
  };

  const AuthInputTitle = {
    email: '이메일 형식이 올바르지 않습니다. 예시: example@domain.com',
    password: '영문과 숫자를 포함한 6글자 이상을 입력해주세요.',
    name: '이름을 정확히 입력해주세요. (한글 2~30)',
    phone: '전화번호를 정확히 입력해주세요. 예시: 010-1111-1111',
  };

  const AuthInputClassName = cn(
    'h-14 w-full rounded-lg bg-gray02 px-5 text-lg',
  );

  return {
    formData,
    handleAuthChange,
    handleAuthSubmit,
    AuthInputTitle,
    AuthInputClassName,
  };
};
