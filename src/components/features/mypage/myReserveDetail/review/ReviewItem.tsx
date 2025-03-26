interface ItemProps {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  label: string;
}

const ReviewItem = ({ onChange, label }: ItemProps) => {
  return (
    <div className='m-2'>
      <label className='flex items-center text-xl'>
        <input type='checkbox' onChange={onChange} className='mr-5' />
        {label}
      </label>
    </div>
  );
};

export default ReviewItem;
