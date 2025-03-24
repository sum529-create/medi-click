import { Input } from '@/components/ui/input';
import Text from '@/components/ui/Text';

interface Input {
  label: string;
  inputValue: string;
  className?: string;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const EditFormInput = ({
  label,
  inputValue,
  className,
  disabled,
  onChange,
}: Input) => {
  return (
    <div className={`flex w-full flex-col gap-3 ${className}`}>
      <Text size='xl' color='black02' align='left'>
        {label}
      </Text>
      <Input
        className='h-[50px] w-full rounded-[14px] border-2 border-gray03'
        disabled={disabled}
        value={inputValue}
        onChange={onChange}
      />
    </div>
  );
};

export default EditFormInput;
