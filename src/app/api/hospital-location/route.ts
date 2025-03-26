import { NextResponse } from 'next/server';
import { TABLE } from '@/constants/supabaseTables';
import { Location } from '@/types/map';
import { createClient } from '@/utils/supabase/supabaseServer';

export const dynamic = 'force-static';

export async function GET() {
  const supabase = createClient();

  try {
    let allHospitalLocations: Location[] = [];
    let page = 0;
    const pageSize = 100;

    while (true) {
      const start = page * pageSize;
      const end = start + pageSize - 1;

      const { data, error } = await supabase
        .from(TABLE.HOSPITALS)
        .select('lat, lng, name, id')
        .range(start, end);

      if (error) throw error;
      if (!data || data.length === 0) break;

      allHospitalLocations = [...allHospitalLocations, ...data];
      page++;
    }

    return NextResponse.json(allHospitalLocations);
  } catch (error) {
    console.error('병원 위치 데이터 불러오기 오류', error);
    return NextResponse.json(
      { error: '병원 위치 데이터를 불러오는 중 오류가 발생했습니다.' },
      { status: 500 },
    );
  }
}
