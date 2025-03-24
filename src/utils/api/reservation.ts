import { TABLE } from '@/constants/supabaseTables';
import { supabase } from '../supabase/supabase';

export const insertReservationInfo = async (info) => {
  const { error } = await supabase.from(TABLE.RESERVATIONS).insert(info);
  return error;
};
