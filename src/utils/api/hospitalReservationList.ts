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
      .select(COLUMN.ID)
      .eq(COLUMN.NAME, name)
      .single();

    const { data, error } = await supabase
      .from(TABLE.RESERVATIONS)
      .select(`* , ${TABLE.USERS}(name, phone_number)`)
      .eq(COLUMN.DATE, date)
      .eq(COLUMN.HOSPITAL_ID, hospitalData?.id)
      .order(COLUMN.DATE, { ascending: true })
      .order(COLUMN.TIME, { ascending: true });

    if (error || hospitalError) throw error || hospitalError;
    if (!data || data.length === 0) return null;

    return data || [];
  } catch (error) {
    console.error('예약한 사용자들의 예약정보 불러오기 오류', error);
  }
};

export const updateHospitalReservationStatus = async (
  id: number,
  status: string,
) => {
  try {
    const { data, error } = await supabase
      .from(TABLE.RESERVATIONS)
      .update({ status: status })
      .eq(COLUMN.ID, id)
      .select();

    if (error) throw error;

    return data;
  } catch (error) {
    console.error('예약 상태 변경을 실패하셨습니다', error);
  }
};
