import { Location } from '@/types/map';
/**
 * 지도를 축소할 때 과도한 렌더링을 막아주는 함수 (Level of Detail 적용)
 * @param zoomLevel 지도 확대한 정도
 * @param hospitalLocationList 병원 위치 데이터
 * @returns
 */
export const filterHospitalLocationByZoomLevel = (
  zoomLevel: number,
  hospitalLocationList: Location[],
) => {
  if (zoomLevel >= 11) {
    return hospitalLocationList.filter((_, index) => index % 11 === 0);
  } else if (zoomLevel >= 10) {
    return hospitalLocationList.filter((_, index) => index % 9 === 0);
  } else if (zoomLevel >= 9) {
    return hospitalLocationList.filter((_, index) => index % 7 === 0);
  } else {
    return hospitalLocationList;
  }
};
