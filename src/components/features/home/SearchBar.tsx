'use client';

import { useState } from 'react';
import { IoSearch } from 'react-icons/io5';
import { Input } from '@/components/ui/input';

const SearchBar = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <div className='relative w-full max-w-[800px]'>
      <IoSearch className='text-gray0 absolute right-4 top-1/2 -translate-y-1/2 text-3xl text-gray-400' />
      <Input
        type='text'
        className='min-h-[60px] rounded-full border-2 border-gray03 bg-white pl-6 pr-14 text-lg'
        placeholder='어떤 병원을 예약하실건가요?'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
