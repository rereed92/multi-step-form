import React, { ChangeEvent } from 'react';

interface IInput {
  label: string;
  type?: 'text' | 'password' | 'email' | 'number';
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
}

const Input = ({
  label,
  type = 'text',
  placeholder = '',
  value,
  onChange,
}: IInput) => {
  return (
    <label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          onChange(e.target.value)
        }
      />
      {label}
    </label>
  );
};

export default Input;
