'use client';

import { Map } from 'react-kakao-maps-sdk';
import Loading from '@/components/common/Loading';
import { useKakaoLoad } from '@/hooks/map/useKakaoLoad';

const KaKaoMap = () => {
  const [loading, error] = useKakaoLoad();

  if (loading)
    return (
      <div className='flex-[2]'>
        <Loading size={180} />
      </div>
    );

  if (error)
    return (
      <div className='flex flex-[2] items-center justify-center'>
        지도를 불러오는데 오류가 발생하였습니다.
      </div>
    );

  return (
    <Map
      center={{
        lat: 33.450701,
        lng: 126.570667,
      }}
      level={3}
      className='w-full flex-[2]'
    />
  );
};

export default KaKaoMap;
