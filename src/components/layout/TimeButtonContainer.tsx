interface Props {
  children: React.ReactNode;
  timeZone: string;
}

const TimeButtonContainer = ({ children, timeZone }: Props) => {
  return (
    <div className='flex flex-col items-start gap-2'>
      <p className='font-bold'>{timeZone}</p>
      <div className='mx-auto grid max-w-md gap-4 [grid-template-columns:repeat(auto-fit,minmax(100px,1fr))]'>
        {children}
      </div>
    </div>
  );
};

export default TimeButtonContainer;
