'use client';

import { create } from 'zustand';

interface UserData {
  id: string;
  email: string;
  name: string;
  phone: string;
  birth: string;
}

interface AuthStore {
  userData: UserData;
  isLogin: boolean;
  setUserData: (userData: UserData) => void;
  setIsLogin: (isLogin: boolean) => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  userData: {
    id: '',
    email: '',
    name: '',
    phone: '',
    birth: '',
  },
  isLogin: false,

  setUserData: (userData) => set({ userData }),
  setIsLogin: (isLogin) => set({ isLogin }),
}));
