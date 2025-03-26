import { COLUMN, TABLE } from '@/constants/supabaseTables';
import { supabase } from '../supabase/supabaseClient';

interface Props {
  date: string;
  name: string;
}

export const getHospitalReservationList = async ({ date, name }: Props) => {
  try {
    const { data: hospitalData, error: hospitalError } = await supabase
      .from(TABLE.HOSPITALS)
      .select('id')
      .eq('name', name)
      .single();

    const { data, error } = await supabase
      .from(TABLE.RESERVATIONS)
      .select(`* , ${TABLE.USERS}(name, phone_number)`)
      .eq(COLUMN.DATE, date)
      .eq(COLUMN.HOSPITAL_ID, hospitalData?.id)
      .order('date', { ascending: true })
      .order('time', { ascending: true });

    if (error || hospitalError) throw error || hospitalError;
    if (!data || data.length === 0) return null;

    return data || [];
  } catch (error) {
    console.error('예약한 사용자들의 예약정보 불러오기 오류', error);
  }
};
