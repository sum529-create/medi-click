import { TABLE } from '@/constants/supabaseTables';
import { supabase } from '../supabase/supabase';

interface info {
  created_at?: string;
  date: string;
  hospital_id: string;
  id?: number;
  memo?: string | null;
  status: 'ok' | 'cancel' | 'waiting';
  time: string;
  updated_at?: string;
  user_id?: string;
}

export const insertReservationInfo = async (info: info) => {
  const { error } = await supabase.from(TABLE.RESERVATIONS).insert(info);
  return error;
};
