import Text from '@/components/ui/Text';
import Title from '@/components/ui/Title';

interface DetailContents {
  title: string;
  text: string;
}

const InfoDetailContents = ({ title, text }: DetailContents) => {
  return (
    <div className='flex flex-col gap-3'>
      <Title tag='h3' size='md' align='left' color='black02'>
        {title}
      </Title>
      <Text size='lg' align='left' color='black02'>
        {text}
      </Text>
    </div>
  );
};

export default InfoDetailContents;
