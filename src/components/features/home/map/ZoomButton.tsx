import { FaPlus, FaMinus } from 'react-icons/fa6';
import { Button } from '@/components/ui/button';

interface ZoomButtonProps {
  zoomControls: { zoomIn: () => void; zoomOut: () => void };
}

const ZoomButton = ({ zoomControls }: ZoomButtonProps) => {
  const { zoomIn, zoomOut } = zoomControls;

  return (
    <div className='absolute right-4 top-4 z-10 flex flex-col gap-1 shadow-md'>
      <Button variant='outline' size='icon' onClick={zoomIn}>
        <FaPlus />
      </Button>
      <Button variant='outline' size='icon' onClick={zoomOut}>
        <FaMinus />
      </Button>
    </div>
  );
};

export default ZoomButton;
