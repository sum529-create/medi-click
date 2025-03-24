'use client';

import { debounce } from 'lodash';
import { useCallback, useEffect } from 'react';
import { IoSearch } from 'react-icons/io5';
import { Input } from '@/components/ui/input';
import { useSearchStore } from '@/utils/zustand/useSearchStore';

const SearchBar = () => {
  const DEBOUNCE_DELAY = 400;
  const { searchKeyword, setSearchKeyword } = useSearchStore();

  const debouncedSearch = useCallback(
    debounce(setSearchKeyword, DEBOUNCE_DELAY),
    [],
  );

  useEffect(() => {
    debouncedSearch(searchKeyword);
  }, [searchKeyword, debouncedSearch]);

  return (
    <div className='relative w-full max-w-[800px]'>
      <IoSearch className='text-gray0 absolute right-4 top-1/2 -translate-y-1/2 text-3xl text-gray-400' />
      <Input
        type='text'
        className='min-h-[60px] rounded-full border-2 border-gray03 bg-white pl-6 pr-14 text-lg'
        placeholder='원하는 병원을 찾아보세요.'
        value={searchKeyword}
        onChange={(e) => setSearchKeyword(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
