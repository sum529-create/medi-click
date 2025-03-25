import { TABLE } from '@/constants/supabaseTables';
import { Tables } from '@/types/supabase';
import { supabase } from '../supabase/supabase';

export const insertReservationInfo = async (info: Tables<'reservations'>[]) => {
  const { error } = await supabase.from(TABLE.RESERVATIONS).insert(info);
  return error;
};
