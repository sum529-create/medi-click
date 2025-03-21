interface InfoSectionType {
  title: string;
  children: React.ReactNode;
}
const InfoSection = ({ title, children }: InfoSectionType) => {
  return (
    <div className='mt-[70px]'>
      <h4 className='mb-5 text-2xl font-bold'>{title}</h4>
      <div className='flex min-h-20 flex-col content-center items-start gap-7 rounded-2xl bg-gray02 p-8 text-xl'>
        {children}
      </div>
    </div>
  );
};
export default InfoSection;
