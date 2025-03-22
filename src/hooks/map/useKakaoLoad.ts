import { useKakaoLoader } from 'react-kakao-maps-sdk';

export const useKakaoLoad = () => {
  const appKey = process.env.NEXT_PUBLIC_KAKAO_API_KEY;

  if (!appKey) {
    throw new Error('NEXT_PUBLIC_KAKAO_API_KEY가 undefined입니다.');
  }

  return useKakaoLoader({
    appkey: appKey,
    libraries: ['clusterer', 'drawing', 'services'],
  });
};
