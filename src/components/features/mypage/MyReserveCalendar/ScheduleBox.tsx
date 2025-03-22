import { Button } from '@/components/ui/button';
import ScheduleContainer from './ScheduleBox/ScheduleContainer';
import ScheduleDetailContainer from './ScheduleBox/ScheduleDetailContainer';
import ScheduleDetailContents from './ScheduleBox/ScheduleDetailContents';
import ScheduleTitleBox from './ScheduleBox/ScheduleTitleBox';

const ScheduleBox = () => {
  return (
    <ScheduleContainer>
      <ScheduleTitleBox />
      <ScheduleDetailContainer>
        <ScheduleDetailContents>
          <div>
            <h3 className='text-2xl font-bold text-deep-blue'>ㅇㅇ 내과의원</h3>
            <p className='text-xl font-medium text-black01'>
              2025년 3월 20일 (목) 14:00
            </p>
          </div>
          <p className='text-lg font-medium text-black01'>상태: 예약 확정</p>
        </ScheduleDetailContents>
        <Button className='absolute right-10 top-12 h-[42px] w-[144px] bg-deep-blue text-lg font-bold hover:bg-black01'>
          상세보기
        </Button>
      </ScheduleDetailContainer>
    </ScheduleContainer>
  );
};

export default ScheduleBox;
