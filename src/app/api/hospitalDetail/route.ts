import { NextRequest, NextResponse } from 'next/server';
import { OPEN_API_HOSPITAL_DETAIL } from '@/constants/apiUrl';

/**
 * 공공API 병⋅의원별 기본정보 조회 라우터 핸들러
 * @param request NextRequest - 요청 객체
 * @returns NextResponse
 */
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  if (!id) {
    return NextResponse.json(
      { error: 'Hospital ID is required' },
      { status: 400 },
    );
  }

  const url = `${OPEN_API_HOSPITAL_DETAIL}/getHsptlBassInfoInqire`;
  const serviceKey = process.env.NEXT_PUBLIC_HOSPITAL_API_KEY;
  if (!serviceKey) {
    return NextResponse.json(
      { error: 'Hospital API key is not defined' },
      { status: 500 },
    );
  }
  const queryParams = new URLSearchParams({
    serviceKey,
    HPID: id,
    _type: 'json',
  });
  try {
    const res = await fetch(`${url}?${queryParams}`);

    if (res.ok) {
      const responseText = await res.text();
      const data = JSON.parse(responseText);

      if (data.response && data.response.body) {
        const { items } = data.response.body;

        if (!items || (!items.item && !Array.isArray(items))) {
          return NextResponse.json(
            { error: 'No hospital data found' },
            { status: 404 },
          );
        }

        const hospitalItems = Array.isArray(items.item)
          ? items.item
          : [items.item];
        return NextResponse.json({ data: hospitalItems });
      }
    } else {
      NextResponse.json(
        { error: `Hospital Detail Fetching Error: ${res.statusText}` },
        { status: res.status },
      );
    }
  } catch (error) {
    return NextResponse.json({ error });
  }
}

export default GET;
