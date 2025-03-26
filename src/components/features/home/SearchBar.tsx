'use client';

import { debounce } from 'lodash-es';
import { useMemo, useState } from 'react';
import { IoSearch } from 'react-icons/io5';
import { Input } from '@/components/ui/input';
import { useSearchStore } from '@/utils/zustand/useSearchStore';
import SearchBarContainer from './layout/SearchBarContainer';

const SearchBar = () => {
  /** constant */
  const DEBOUNCE_DELAY = 400;

  /** state */
  const [inputValue, setInputValue] = useState('');
  const setSearchKeyword = useSearchStore((state) => state.setSearchKeyword);

  /** function */
  const debouncedSetSearchKeyword = useMemo(
    () =>
      debounce((keyword: string) => {
        setSearchKeyword(keyword);
      }, DEBOUNCE_DELAY),
    [setSearchKeyword],
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    const filteredKeyword = e.target.value.replace(/[^가-힣a-zA-Z0-9]/g, '');
    debouncedSetSearchKeyword(filteredKeyword);
  };

  /** UI */
  return (
    <SearchBarContainer>
      <IoSearch className='text-gray0 absolute right-4 top-1/2 -translate-y-1/2 text-3xl text-gray-400' />
      <Input
        type='text'
        className='min-h-[60px] rounded-full border-2 border-gray03 bg-white pl-6 pr-14 text-lg'
        placeholder='원하는 병원을 찾아보세요.'
        value={inputValue}
        onChange={handleChange}
      />
    </SearchBarContainer>
  );
};

export default SearchBar;
