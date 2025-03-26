'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const UserMenuItem = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => {
  const pathName: string = usePathname();

  const hoverStyle: string = href === pathName ? 'bg-sub-hover' : '';

  return (
    <Link
      href={href}
      className={`${hoverStyle} flex h-[70px] items-center justify-center text-xl font-bold text-black02 hover:cursor-pointer hover:bg-sub-hover`}
    >
      {children}
    </Link>
  );
};

export default UserMenuItem;
