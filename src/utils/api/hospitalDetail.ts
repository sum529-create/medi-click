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

    return data.data[0];
  } catch (error) {
    console.error('Error fetching hospital details:', error);
    throw error;
  }
};

export default hospitalDetail;
