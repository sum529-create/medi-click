import { FaPlus, FaMinus } from 'react-icons/fa6';
import { Button } from '@/components/ui/button';

interface ZoomButtonProps {
  zoomControls: { zoomIn: () => void; zoomOut: () => void };
}

const ZoomButton = ({ zoomControls }: ZoomButtonProps) => {
  const { zoomIn, zoomOut } = zoomControls;

  return (
    <div className='flex flex-col gap-1'>
      <Button
        variant='outline'
        size='icon'
        className='shadow-md'
        onClick={zoomIn}
      >
        <FaPlus />
      </Button>
      <Button
        variant='outline'
        size='icon'
        className='shadow-md'
        onClick={zoomOut}
      >
        <FaMinus />
      </Button>
    </div>
  );
};

export default ZoomButton;
