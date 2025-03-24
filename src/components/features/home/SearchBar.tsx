'use client';

import { debounce } from 'lodash';
import { useCallback, useState } from 'react';
import { IoSearch } from 'react-icons/io5';
import { Input } from '@/components/ui/input';
import { useSearchStore } from '@/utils/zustand/useSearchStore';

const SearchBar = () => {
  const DEBOUNCE_DELAY = 400;
  const [inputValue, setInputValue] = useState('');
  const setSearchKeyword = useSearchStore((state) => state.setSearchKeyword);

  const debouncedSearch = useCallback(
    debounce(setSearchKeyword, DEBOUNCE_DELAY),
    [],
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    const filteredKeyword = e.target.value.replace(/[^가-힣a-zA-Z0-9]/g, '');
    debouncedSearch(filteredKeyword);
  };

  return (
    <div className='relative w-full max-w-[800px]'>
      <IoSearch className='text-gray0 absolute right-4 top-1/2 -translate-y-1/2 text-3xl text-gray-400' />
      <Input
        type='text'
        className='min-h-[60px] rounded-full border-2 border-gray03 bg-white pl-6 pr-14 text-lg'
        placeholder='원하는 병원을 찾아보세요.'
        value={inputValue}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;
