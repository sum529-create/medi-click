import { TABLE } from '@/constants/supabaseTables';
import { supabase } from '../supabase/supabase';

/**
 * 병원 상세 정보 조회를 위한 기본 URL 생성 함수
 */
export const getHospitalApiUrl = (id: string) => {
  // 브라우저에서 실행 중인지 확인
  const isClient = typeof window !== 'undefined';

  if (isClient) {
    // 클라이언트에서는 API 라우터 사용
    return `/api/hospitalDetail?id=${id}`;
  } else {
    // 서버에서는 절대 URL 사용
    const baseUrl = process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : 'http://localhost:3000';

    return `${baseUrl}/api/hospitalDetail?id=${id}`;
  }
};

/**
 * 병원 상세 정보 조회
 */
const hospitalDetail = async (id: string, options?: { isServer?: boolean }) => {
  try {
    const apiUrl = getHospitalApiUrl(id);
    const res = await fetch(apiUrl);

    if (!res.ok) {
      throw new Error('Failed to fetch hospital detail');
    }
    const data = await res.json();
    const detailData = data.data[0];
    return detailData;
  } catch (error) {
    console.error('Error fetching hospital details:', error);
    throw error;
  }
};

/**
 * 병원 정보 섹션 조회
 */
export const hospitalDetailInfoSection = async (id: string) => {
  try {
    const { data, error } = await supabase
      .from(TABLE.HOSPITALS)
      .select('department, info, etc')
      .eq('id', id);
    if (error) throw error;
    if (!data || data.length === 0) return false;

    const infoData = data[0];
    return infoData;
  } catch (error) {
    console.error('Error fetching hospital info section data', error);
    throw error;
  }
};

export default hospitalDetail;
