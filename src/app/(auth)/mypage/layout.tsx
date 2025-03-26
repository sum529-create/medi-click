import MyPageContainer from '@/components/features/mypage/layout/MyPageContainer';
import MyPageContentsContainer from '@/components/features/mypage/layout/MyPageContentsContainer';
import SideBar from '@/components/features/mypage/layout/sideBar/SideBar';
import type { Children } from '@/types/children';

export default function MyPageLayout({ children }: Children) {
  return (
    <MyPageContainer>
      <SideBar />
      <MyPageContentsContainer>{children}</MyPageContentsContainer>
    </MyPageContainer>
  );
}
