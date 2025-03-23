import { ReactNode } from 'react';
import MyPageContainer from '@/components/features/mypage/layout/MyPageContainer';
import MyPageContentsContainer from '@/components/features/mypage/layout/MyPageContentsContainer';
import SideBar from '@/components/features/mypage/layout/sideBar/SideBar';

export default function MyPageLayout({ children }: { children: ReactNode }) {
  const userData = {
    name: '김수임',
    email: 'rrrr6563@naver.com',
    phoneNumber: '010-1234-5678',
    profileImgPath:
      'https://velog.velcdn.com/images/_kimsuim/profile/f5407ae2-e00f-4e28-a056-3e6429388967/image.JPG',
  }; //임시데이터

  return (
    <MyPageContainer>
      <SideBar user={userData} />
      <MyPageContentsContainer>{children}</MyPageContentsContainer>
    </MyPageContainer>
  );
}
