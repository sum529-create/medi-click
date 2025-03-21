import Link from 'next/link';
import { PATH } from '@/constants/routerPath';
import Nav from './Nav';

const Header = () => {
  return (
    <header className='flex h-[60px] items-center justify-between px-6 md:px-8'>
      <Link href={PATH.HOME} className='font-bold hover:text-main'>
        MEDICLICK
      </Link>
      <Nav />
    </header>
  );
};

export default Header;
