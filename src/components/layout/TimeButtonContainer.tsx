interface Props {
  children: React.ReactNode;
  timeZone: string;
}

const TimeButtonContainer = ({ children, timeZone }: Props) => {
  return (
    <div className='flex flex-col items-start gap-2'>
      <p className='font-bold'>{timeZone}</p>
      <div className='mx-auto grid w-full max-w-md grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4'>
        {children}
      </div>
    </div>
  );
};

export default TimeButtonContainer;
