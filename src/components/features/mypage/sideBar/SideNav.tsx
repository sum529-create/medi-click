import SideNavWrapper from './SideNavWrapper';

const SideNav = () => {
  return (
    <nav className='h-[276px] w-[264px] rounded-[16px] bg-sub'>
      <div className='flex h-[66px] w-[264px] items-center justify-center rounded-t-[16px] bg-main'>
        <p className='text-2xl font-bold text-white'>USER MENU</p>
      </div>
      <div>
        <SideNavWrapper>내 예약 캘린더</SideNavWrapper>
        <SideNavWrapper>내 예약 목록</SideNavWrapper>
      </div>
      <SideNavWrapper className='rounded-b-[16px]'>
        개인 정보 수정
      </SideNavWrapper>
    </nav>
  );
};

export default SideNav;
