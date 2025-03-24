export interface HospitalDataType {
  dutyAddr: string;
  dutyTel1: string;
  dutyName: string;
  dgidIdName: string;
  dutyTime1c: number;
  dutyTime1s: string;
  dutyTime2c: number;
  dutyTime2s: string;
  dutyTime3c: number;
  dutyTime3s: string;
  dutyTime4c: number;
  dutyTime4s: string;
  dutyTime5c: number;
  dutyTime5s: string;
  dutyTime6c: number;
  dutyTime6s: string;
  dutyTime7c: number;
  dutyTime7s: string;
  dutyTime8c: number;
  dutyTime8s: string;

  [key: string]: string | number;
}

export interface HospitalScheduleResult {
  // 데이터 객체
  data: {
    hospitalData: HospitalDataType;
    infoData:
      | boolean
      | { department: string; info: string | null; etc: string | null }
      | undefined;
    reviewData:
      | boolean
      | (
          | '친절해요'
          | '진료 대기가 없어요'
          | '시설이 좋고 청결해요'
          | '전문적이에요'
          | null
        )[]
      | undefined;
    schedule: {
      dutyTimes: string[][];
      restWeeks: string[];
    };
  };

  // 상태 객체
  status: {
    isPending: boolean;
    isError: boolean;
    error: Error | null;
  };
}
