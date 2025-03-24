import { InfiniteData } from '@tanstack/react-query';
import { Tables } from '@/types/supabase';

export const checkEmptyPages = (
  hospitalList: InfiniteData<Tables<'hospitals'>[]>,
): boolean => {
  return hospitalList.pages.flat().length === 0;
};
