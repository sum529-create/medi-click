/**
 * 병원 상세 정보 조회
 */
const hospitalDetail = async (id: string) => {
  try {
    const res = await fetch(`/api/hospitalDetail?id=${id}`);

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
