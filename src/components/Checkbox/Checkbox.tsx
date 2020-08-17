import React, { ChangeEvent } from 'react';
import { useTheme } from 'react-jss';
import { CheckIcon } from 'icons/icons';
import useStyles from './Checkbox.styles';

interface ICheckboxProps {
  label: string;
  value: boolean;
  onChange: (value: boolean) => void;
  testId?: string;
}

const Checkbox = ({
  label,
  value,
  onChange,
  testId = 'checkbox',
}: ICheckboxProps) => {
  const theme = useTheme();
  const classes = useStyles({ theme });

  return (
    <label className={classes.checkbox}>
      <input
        data-testid={testId}
        className={classes.input}
        type="checkbox"
        checked={value}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          onChange(e.target.checked)
        }
      />
      <div className={classes.label} data-testid="label">
        {value && (
          <span className={classes.icon} data-testid="icon">
            <CheckIcon />
          </span>
        )}
        <span>{label}</span>
      </div>
    </label>
  );
};

export default Checkbox;
