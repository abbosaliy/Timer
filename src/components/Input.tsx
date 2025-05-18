import type React from 'react';

interface InputProps {
  value: number;
  onchange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className: string;
  type: string;
}

function Input({ value, onchange, className = '', type = '' }: InputProps) {
  return (
    <input
      value={value}
      onChange={onchange}
      className={className}
      type={type}
    />
  );
}

export default Input;
