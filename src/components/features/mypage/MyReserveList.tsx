import React from 'react';
import { ScheduleData } from '@/types/components/ui/mypage.schedule';
import MainContentsContainer from './MainContentsContainer';
import MainContentsTitleBox from './MainContentsTitleBox';
import ScheduleDetail from './ScheduleDetail';

const MyReserveList = () => {
  const testData: ScheduleData = {
    hospitalName: '서울통정형외과의원 잠실점',
    schedule: '2025년 3월 20일 (목) 14:00',
    status: 'ok',
  };
  return (
    <MainContentsContainer>
      <MainContentsTitleBox title='내 예약 목록' />
      <ScheduleDetail scheduleData={testData} />
      <ScheduleDetail scheduleData={testData} />
      <ScheduleDetail scheduleData={testData} />
    </MainContentsContainer>
  );
};

export default MyReserveList;
