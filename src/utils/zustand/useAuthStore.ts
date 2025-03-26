'use client';

import { create } from 'zustand';
import { Tables } from '@/types/supabase';

interface AuthStore {
  userData: Omit<Tables<'users'>, 'created_at'>;
  isLogin: boolean;

  setUserData: (userData: Omit<Tables<'users'>, 'created_at'>) => void;
  setIsLogin: (isLogin: boolean) => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  userData: {
    id: '',
    email: '',
    name: '',
    phone_number: '',
    avatar_path: '',
    birth: '',
  },
  isLogin: false,

  setUserData: (userData) => set({ userData }),
  setIsLogin: (isLogin) => set({ isLogin }),
}));
