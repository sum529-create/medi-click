const SideNavWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`${className} flex h-[70px] items-center justify-center text-xl font-bold text-black02 hover:cursor-pointer hover:bg-sub-hover`}
    >
      {children}
    </div>
  );
};

export default SideNavWrapper;
