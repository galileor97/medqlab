// components/Button.jsx
import React from 'react';

interface SimpleButtonProps {
    icon?: React.ReactNode;
    text: string;
    variant?: 'primary' | 'success' | 'rounded';
    onClick?: () => void;
    className?: string;
    size?: 'small' | 'medium' | 'large';
    active?: boolean;
}

const Button = ({ icon, text, variant = 'primary', onClick, className = '', active = true }: SimpleButtonProps) => {

  const getVariantClasses = () => {
    switch (variant) {
      case 'primary':
        return 'bg-[#0078FF] hover:bg-blue-400 text-white rounded-lg';
      case 'success':
        return 'bg-[#12B669] hover:bg-[#12C669] text-white rounded-lg';
      case 'rounded':
        return active 
          ? 'bg-[#003093] hover:bg-blue-500 text-white rounded-full border border-[#D7DDE5] w-[154px]'
          : 'bg-[#ECEFF4] text-[#0045B7] rounded-full  border border-[#D7DDE5] w-[154px]';
      default:
        return 'bg-white hover:bg-gray-100 text-gray-700 border border-gray-300';
    }
  };

  return (
    <button 
      className={`flex items-center font-semibold justify-center gap-2 px-4 py-3 text-sm font-inter ${getVariantClasses()} ${className}`}
      style={{ cursor: 'pointer' }}
      onClick={onClick}
    >
      {icon}
      <span>{text}</span>
    </button>
  );
};

export default Button;