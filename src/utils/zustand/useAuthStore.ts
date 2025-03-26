'use client';

import { create } from 'zustand';
import { Tables } from '@/types/supabase';

interface AuthStore {
  userData: Tables<'users'>;
  isLogin: boolean;

  setUserData: (userData: Tables<'users'>) => void;
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
