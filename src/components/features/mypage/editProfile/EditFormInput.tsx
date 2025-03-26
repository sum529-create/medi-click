import { Input } from '@/components/ui/input';
import Text from '@/components/ui/Text';

interface Input {
  label: string;
  inputValue: string;
  className?: string;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errorMessage?: string | null;
  type?: React.HTMLInputTypeAttribute | undefined;
  textSize:
    | 'sm'
    | 'lg'
    | 'xs'
    | 'md'
    | 'xl'
    | '2xl'
    | '3xl'
    | '4xl'
    | undefined;
}

const EditFormInput = ({
  label,
  inputValue,
  className,
  disabled,
  onChange,
  errorMessage,
  type,
  textSize,
}: Input) => {
  return (
    <div className={`flex w-full flex-col gap-3 ${className}`}>
      <Text size={textSize} color='black02' align='left'>
        {label} <span className='m-5 text-sm text-red'>{errorMessage}</span>
      </Text>

      <Input
        className='h-[50px] w-full rounded-[14px] border-2 border-gray03'
        disabled={disabled}
        value={inputValue}
        onChange={onChange}
        type={type}
      />
    </div>
  );
};

export default EditFormInput;
