import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Title from '@/components/ui/Title';
import { PATH } from '@/constants/routerPath';

interface CustomOverlayProps {
  name: string;
  id: string;
}

const CustomOverlay = ({ name, id }: CustomOverlayProps) => {
  return (
    <div className='flex min-h-[120px] w-[180px] flex-col items-center justify-center gap-3 px-2 py-3'>
      <Title align='center'>{name}</Title>
      <Button asChild>
        <Link href={`${PATH.HOSPITAL}/${id}`}>더보기</Link>
      </Button>
    </div>
  );
};

export default CustomOverlay;
