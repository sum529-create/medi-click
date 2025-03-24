import MainContentsContainer from '@/components/features/mypage/MainContentsContainer';
import MainContentsTitleBox from '@/components/features/mypage/MainContentsTitleBox';
import ScheduleDetail from '@/components/features/mypage/ScheduleDetail';
import type { ScheduleData } from '@/types/components/ui/mypage.schedule';

const ReserveListPage = () => {
  const testData: ScheduleData = {
    hospitalName: '서울통정형외과의원 잠실점',
    schedule: '2025년 3월 20일 (목) 14:00',
    status: 'ok',
    id: 'test',
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

export default ReserveListPage;
