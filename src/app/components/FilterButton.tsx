import React from 'react';
import Button from './Button';
import FilterIcon from './icons/Filter';

export default function FilterButton() {
  return (
    <Button
      endIcon={<FilterIcon />}
      className="min-h-12 gap-x-4 rounded-xl border-[#D0D5DD] bg-white px-5 py-4"
    >
      Filter
    </Button>
  );
}
