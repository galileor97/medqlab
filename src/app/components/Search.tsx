'use client'
import React, { useEffect, useState } from 'react';
import FormInput from './FormInput';
import SearchIcon from './icons/Search';

interface SearchProps {
  onSearch: (query: string) => void;
  placeholder: string;
}

export const Search: React.FC<SearchProps> = ({
  placeholder = '',
  onSearch,
}) => {
  const [search, setSearch] = useState<string>('');

  useEffect(() => {
    if (onSearch) {
      onSearch(search);
    }
  }, [search, onSearch]);

  return (
    <FormInput 
      className="min-h-12 rounded-xl border border-[#D0D5DD] bg-white px-5"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      placeholder={placeholder}
      icon={<SearchIcon />}
    />
  );
};
