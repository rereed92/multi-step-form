import React, { ChangeEvent } from 'react';
import { useTheme } from 'react-jss';
import { CheckIcon } from 'icons/icons';
import useStyles from './Checkbox.styles';

interface ICheckboxProps {
  label: string;
  value: boolean;
  onChange: (value: boolean) => void;
}

const Checkbox = ({ label, value, onChange }: ICheckboxProps) => {
  const theme = useTheme();
  const classes = useStyles({ theme });

  return (
    <label className={classes.checkbox}>
      <input
        className={classes.input}
        type="checkbox"
        checked={value}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          onChange(e.target.checked)
        }
      />
      <div className={classes.label}>
        {value && (
          <span className={classes.icon}>
            <CheckIcon />
          </span>
        )}
        <span>{label}</span>
      </div>
    </label>
  );
};

export default Checkbox;
