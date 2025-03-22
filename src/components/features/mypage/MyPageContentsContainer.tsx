const MyPageContentsContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <div className='relative flex w-full flex-col gap-10'>{children}</div>;
};

export default MyPageContentsContainer;
