import { ScheduleData } from '@/types/components/ui/mypage.schedule';
import ScheduleDetail from '../../ScheduleDetail';
import ScheduleContainer from './ScheduleContainer';
import ScheduleTitleBox from './ScheduleTitleBox';

const ScheduleBox = () => {
  const testData: ScheduleData = {
    hospitalName: '서울통정형외과의원 잠실점',
    schedule: '2025년 3월 20일 (목) 14:00',
    status: 'ok',
  };
  return (
    <ScheduleContainer>
      <ScheduleTitleBox />
      <ScheduleDetail scheduleData={testData} />
    </ScheduleContainer>
  );
};

export default ScheduleBox;
