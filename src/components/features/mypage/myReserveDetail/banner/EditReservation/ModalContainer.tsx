interface Children {
  children: React.ReactNode;
}

const ModalContainer = ({ children }: Children) => {
  return (
    <div className='fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50'>
      <div className='w-full max-w-md overflow-hidden rounded-[13px] bg-white p-5 shadow-lg'>
        {children}
      </div>
    </div>
  );
};

export default ModalContainer;
