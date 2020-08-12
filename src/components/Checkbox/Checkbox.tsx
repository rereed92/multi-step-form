import React, { ChangeEvent } from 'react';

interface ICheckbox {
  label: string;
  value: boolean;
  onChange: (value: boolean) => void;
}

const Checkbox = ({ label, value, onChange }: ICheckbox) => {
  return (
    <label>
      <input
        type="checkbox"
        checked={value}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          onChange(e.target.checked)
        }
      />
      {label}
    </label>
  );
};

export default Checkbox;
