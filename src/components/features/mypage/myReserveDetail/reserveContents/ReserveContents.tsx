import { Button } from '@/components/ui/button';
import { ReservationProps } from '@/types/components/mypage/reservation.type';
import ContentsContainer from './ContentsContainer';
import InfoContainer from './InfoContainer';
import InfoDetailContainer from './InfoDetailContainer';
import InfoDetailContents from './InfoDetailContents';
import InfoMap from './InfoMap';
import InfoTitleBox from './InfoTitleBox';

const ReserveContents = ({ reservation }: ReservationProps) => {
  console.log('reservation', reservation);
  return (
    <ContentsContainer>
      <InfoContainer>
        <InfoTitleBox />
        <InfoDetailContainer>
          <InfoDetailContents title='예약자' text='김수임님' />
          <InfoDetailContents title='진료과' text='정형외과' />
          <InfoDetailContents title='증상' text={reservation.memo} />
          <Button className='absolute bottom-0 right-8 h-[44px] w-[146px] rounded-[10px] font-bold'>
            리뷰 작성
          </Button>
          {/*날짜가 지나면 해당 버튼이 나타나도록*/}
        </InfoDetailContainer>
      </InfoContainer>
      <InfoMap />
    </ContentsContainer>
  );
};

export default ReserveContents;
