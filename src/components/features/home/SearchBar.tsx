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
        className='min-h-[60px] rounded-full border-2 border-gray03 bg-white px-6 text-lg'
        placeholder='진료 보실 과목을 입력해주세요.'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
