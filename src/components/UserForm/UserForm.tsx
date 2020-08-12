import React from 'react';
import { Input } from 'components';

interface IUserInputOptions {
  value: string;
  onChange: (value: string) => void;
  errorMessage?: string;
}

interface IUserFormProps {
  name: IUserInputOptions;
  role: IUserInputOptions;
  email: IUserInputOptions;
  password: IUserInputOptions;
}

const UserForm = ({ name, role, email, password }: IUserFormProps) => {
  return (
    <fieldset>
      <legend>User</legend>
      <Input
        label="name"
        value={name.value}
        onChange={name.onChange}
        errorMessage={name.errorMessage}
      />

      <Input
        label="role"
        value={role.value}
        onChange={role.onChange}
        errorMessage={role.errorMessage}
      />

      <Input
        label="email"
        type="email"
        value={email.value}
        onChange={email.onChange}
        errorMessage={email.errorMessage}
      />

      <Input
        label="password"
        type="password"
        value={password.value}
        onChange={password.onChange}
        errorMessage={password.errorMessage}
      />
    </fieldset>
  );
};

export default UserForm;
