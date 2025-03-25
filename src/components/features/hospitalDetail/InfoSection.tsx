import Text from '@/components/ui/Text';

interface InfoSectionType {
  title: string;
  children: React.ReactNode;
}
const InfoSection = ({ title, children }: InfoSectionType) => {
  return (
    <div className='mt-[70px]'>
      <div className='mb-5'>
        <Text size='2xl' color='black01' isBold={true}>
          {title}
        </Text>
      </div>
      <div className='flex min-h-20 flex-col content-center items-start gap-7 rounded-2xl bg-gray02 p-8 text-xl'>
        {children}
      </div>
    </div>
  );
};
export default InfoSection;
