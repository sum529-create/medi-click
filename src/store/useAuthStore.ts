'use client';

import { create } from 'zustand';

interface AuthStore {
  userData: {
    email: string;
    name: string;
    phone: string;
    birth: string;
  };
  isLogin: boolean;

  setUserData: (userData: AuthStore['userData']) => void;
  setIsLogin: (isLogin: boolean) => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  userData: {
    email: '',
    name: '',
    phone: '',
    birth: '',
  },
  isLogin: false,

  setUserData: (userData) => set({ userData }),
  setIsLogin: (isLogin) => set({ isLogin }),
}));
