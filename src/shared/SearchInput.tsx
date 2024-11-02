'use client';

import { useState } from 'react';

import SearchIcon from '@svg/search.svg';

export default function SearchInput() {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <div
      className='relative'
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    >
      <input
        className={`
            w-full p-4 border rounded-searchInput box-border border-secondary-30 text-body-1 transition-all duration-300
            ${isFocused && 'border-primary-30 shadow-input-focus outline-none'}
          `}
        placeholder='검색하기'
      />
      <div className='absolute top-1/2 right-4 transform -translate-y-1/2'>
        <SearchIcon />
      </div>
    </div>
  );
}
