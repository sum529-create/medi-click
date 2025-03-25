import Text from '../ui/Text';

interface Props {
  children: React.ReactNode;
  timeZone: string;
}

const TimeButtonContainer = ({ children, timeZone }: Props) => {
  return (
    <div className='flex w-full flex-col items-center gap-2'>
      <div className='grid w-full max-w-lg gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5'>
        <div className='col-span-full ml-2'>
          <Text isBold align='left' size='lg'>
            {timeZone}
          </Text>
        </div>
        {children}
      </div>
    </div>
  );
};

export default TimeButtonContainer;
