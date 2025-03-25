import { ReactNode } from 'react';
import MyPageContainer from '@/components/features/mypage/layout/MyPageContainer';
import MyPageContentsContainer from '@/components/features/mypage/layout/MyPageContentsContainer';
import SideBar from '@/components/features/mypage/layout/sideBar/SideBar';

export default function MyPageLayout({ children }: { children: ReactNode }) {
  return (
    <MyPageContainer>
      <SideBar />
      <MyPageContentsContainer>{children}</MyPageContentsContainer>
    </MyPageContainer>
  );
}
