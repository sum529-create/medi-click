import { Dispatch, SetStateAction } from 'react';
import { MdOutlineMyLocation } from 'react-icons/md';
import { Button } from '@/components/ui/button';
import { Location } from '@/types/map';

interface LocationButtonProps {
  currentLocation: Omit<Location, 'name' | 'id'>;
  setMapCenter: Dispatch<SetStateAction<Omit<Location, 'name' | 'id'>>>;
  setMapLevel: Dispatch<SetStateAction<number>>;
}

const CurrentLocationButton = ({
  currentLocation,
  setMapCenter,
  setMapLevel,
}: LocationButtonProps) => {
  /** function */
  const handleClickButton = () => {
    setMapCenter(currentLocation);
    setMapLevel(3);
  };

  /** UI */
  return (
    <Button
      variant='outline'
      size='icon'
      className='shadow-md'
      onClick={handleClickButton}
    >
      <MdOutlineMyLocation />
    </Button>
  );
};

export default CurrentLocationButton;
