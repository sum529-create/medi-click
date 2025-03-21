import { useKakaoLoader as useKakaoLoaderOrigin } from 'react-kakao-maps-sdk';

const useKakaoLoader = () => {
  const appKey = process.env.NEXT_PUBLIC_KAKAO_API_KEY;

  if (!appKey) {
    throw new Error('NEXT_PUBLIC_KAKAO_API_KEY is not defined');
  }

  useKakaoLoaderOrigin({
    appkey: appKey,
    libraries: ['clusterer', 'drawing', 'services'],
  });
};

export default useKakaoLoader;
