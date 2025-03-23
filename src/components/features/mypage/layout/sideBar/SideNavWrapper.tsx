import Link from 'next/link';

const SideNavWrapper = ({
  children,
  className,
  href,
}: {
  children: React.ReactNode;
  className?: string;
  href: string;
}) => {
  return (
    <Link
      href={href}
      className={`${className} flex h-[70px] items-center justify-center text-xl font-bold text-black02 hover:cursor-pointer hover:bg-sub-hover`}
    >
      {children}
    </Link>
  );
};

export default SideNavWrapper;
