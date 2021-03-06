/* eslint-disable react/button-has-type */
import React, { MouseEvent } from 'react';
import { useTheme } from 'react-jss';
import classNames from 'classnames';
import useStyles from './Button.styles';

interface IButtonProps {
  type?: 'button' | 'submit';
  disabled?: boolean;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
  text: string;
  secondary?: boolean;
  testId?: string;
}

const Button = ({
  type = 'button',
  disabled = false,
  onClick,
  text,
  secondary = false,
  testId = 'button',
}: IButtonProps) => {
  const theme = useTheme();
  const classes = useStyles({ theme });

  return (
    <button
      data-testid={testId}
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={classNames([
        {
          [classes.button]: !secondary,
          [classes.buttonSecondary]: secondary,
        },
      ])}
    >
      {text}
    </button>
  );
};

export default Button;
