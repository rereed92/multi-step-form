import React, { ChangeEvent } from 'react';
import { useTheme } from 'react-jss';
import useStyles from './Input.styles';

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
  const theme = useTheme();
  const classes = useStyles({ theme });

  return (
    <div className={classes.inputWrapper}>
      <label className={classes.wrapper}>
        <span className={classes.label}>{label}</span>
        <input
          className={classes.input}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            onChange(e.target.value)
          }
          onBlur={onBlur}
        />
      </label>
      {errorMessage && <p className={classes.error}>{errorMessage}</p>}
    </div>
  );
};

export default Input;
