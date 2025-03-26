import { Children } from '@/types/children';

const SearchBarContainer = ({ children }: Children) => {
  return <div className='relative w-full max-w-[800px]'>{children}</div>;
};

export default SearchBarContainer;
