'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';

const SearchBar = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <Input
      className='absolute top-64 min-h-[60px] w-[900px] rounded-full border-gray03 bg-white px-6 text-xl'
      placeholder='진료 보실 과목을 입력해주세요.'
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
    />
  );
};

export default SearchBar;
