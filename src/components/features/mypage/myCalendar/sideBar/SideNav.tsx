const SideNav = () => {
  return (
    <nav className='h-[276px] w-[264px] rounded-[16px] bg-sub'>
      <div className='flex h-[66px] w-[264px] items-center justify-center rounded-t-[16px] bg-main'>
        <p className='text-2xl font-bold text-white'>USER MENU</p>
      </div>
      <div className=''>
        <div className='flex h-[70px] items-center justify-center text-xl font-bold text-black02 hover:cursor-pointer hover:bg-sub-hover'>
          내 예약 캘린더
        </div>
        <div className='flex h-[70px] items-center justify-center text-xl font-bold text-black02 hover:cursor-pointer hover:bg-sub-hover'>
          내 예약 목록
        </div>
        <div className='flex h-[70px] items-center justify-center rounded-b-[16px] text-xl font-bold text-black02 hover:cursor-pointer hover:bg-sub-hover'>
          개인정보 수정
        </div>
      </div>
    </nav>
  );
};

export default SideNav;
