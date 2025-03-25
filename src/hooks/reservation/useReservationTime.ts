import { useEffect, useState } from 'react';
import { fetchReservationDate } from '@/utils/api/reservation';
import { deleteTimeSecond } from '@/utils/func/convertToTimeFormat';
import { supabase } from '@/utils/supabase/supabase';

export const useReservationTimeMap = (id: string, date: string) => {
  const [checkedTime, setCheckedTime] = useState<Record<string, number>>({});

  useEffect(() => {
    const fetch = async () => {
      const data = await fetchReservationDate(id, date);
      const timeMap: Record<string, number> = {};

      data?.forEach((d) => {
        const time = deleteTimeSecond(d.time);
        timeMap[time] = (timeMap[time] ?? 0) + 1;
      });

      setCheckedTime(timeMap);
    };

    fetch();

    const channel = supabase
      .channel('reservation-channel')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'reservations',
        },
        (payload) => {
          if (payload.new.date !== date || payload.new.hospital_id !== id)
            return;

          const time = deleteTimeSecond(payload.new.time);
          setCheckedTime((prev) => ({
            ...prev,
            [time]: (prev[time] ?? 0) + 1,
          }));
        },
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  return checkedTime;
};
