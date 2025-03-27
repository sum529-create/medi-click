import { NextRequest, NextResponse } from 'next/server';
import { TABLE } from '@/constants/supabaseTables';
import { createClient } from '@/utils/supabase/supabaseServer';

export async function GET(request: NextRequest) {
  const supabase = createClient();

  try {
    const searchParams = request.nextUrl.searchParams;
    const pageParam = Number(searchParams.get('page')) || 1;
    const searchKeyword = decodeURIComponent(searchParams.get('search') || '');

    const pageSize = 10;
    const start = (pageParam - 1) * pageSize;
    const end = start + pageSize - 1;

    let query = supabase.from(TABLE.HOSPITALS).select('*');

    // 검색창에 키워드가 입력되면, 해당 키워드를 가진 병원 목록을 찾음
    if (searchKeyword) {
      query = query.ilike('normalized_name', `%${searchKeyword}%`);
    }

    // 검색창에 키워드가 없으면, 전체 병원 목록을 반환함
    const { data: hospitalData, error } = await query.range(start, end);

    if (error) throw error;

    return NextResponse.json(hospitalData);
  } catch (error) {
    console.error('병원 데이터 불러오기 오류', error);
    return NextResponse.json(
      { error: '병원 데이터를 불러오는 중 오류가 발생했습니다.' },
      { status: 500 },
    );
  }
}
