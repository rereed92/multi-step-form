import React, { ChangeEvent } from 'react';

interface IInputProps {
  label: string;
  type?: 'text' | 'password' | 'email' | 'number';
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  errorMessage?: string;
}

const Input = ({
  label,
  type = 'text',
  placeholder = '',
  value,
  onChange,
  onBlur = () => {},
  errorMessage = '',
}: IInputProps) => {
  return (
    <div>
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
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};

export default Input;
