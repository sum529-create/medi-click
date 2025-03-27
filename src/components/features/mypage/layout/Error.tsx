import Text from '@/components/ui/Text';
import Title from '@/components/ui/Title';
import { Children } from '@/types/children';

const Error = ({
  errorMessage,
  children,
}: Children & {
  errorMessage: string;
}) => {
  return (
    <section className='grid h-[1080px] place-items-center'>
      <div className='text-center'>
        <Title tag='h1' size='4xl' align='center'>
          OOPS!
        </Title>
        <div className='h-5' />
        <Title tag='h2' size='xl' align='center'>
          😵 THAT&apos;S AN ERROR 😵
        </Title>
        <div className='h-5' />
        <Text size='lg' align='center'>
          {errorMessage}
        </Text>
        <div className='h-14' />
        <div className='flex items-center justify-center gap-10'>
          {children}
        </div>
      </div>
    </section>
  );
};

export default Error;
