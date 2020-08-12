import React, { ChangeEvent } from 'react';

interface IInput {
  label: string;
  type?: 'text' | 'password' | 'email' | 'number';
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
}

const Input = ({
  label,
  type = 'text',
  placeholder = '',
  value,
  onChange,
  onBlur = () => {},
}: IInput) => {
  return (
    <label>
      {label}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          onChange(e.target.value)
        }
        onBlur={onBlur}
      />
    </label>
  );
};

export default Input;
