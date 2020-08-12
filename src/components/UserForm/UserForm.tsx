import React from 'react';
import { Input } from 'components';

interface IUserForm {
  name: {
    value: string;
    onChange: (value: string) => void;
    onBlur?: any;
    errorMessage?: string;
  };
  role: {
    value: string;
    onChange: (value: string) => void;
    onBlur?: any;
    errorMessage?: string;
  };
  email: {
    value: string;
    onChange: (value: string) => void;
    onBlur?: any;
    errorMessage?: string;
  };
  password: {
    value: string;
    onChange: (value: string) => void;
    onBlur?: any;
    errorMessage?: string;
  };
}

const UserForm = ({ name, role, email, password }: IUserForm) => {
  return (
    <fieldset>
      <legend>User</legend>
      <Input
        label="name"
        value={name.value}
        onChange={(value: string) => name.onChange(value)}
        onBlur={name.onBlur}
      />
      {name.errorMessage && <p>{name.errorMessage}</p>}

      <Input
        label="role"
        value={role.value}
        onChange={(value: string) => role.onChange(value)}
        onBlur={role.onBlur}
      />
      {role.errorMessage && <p>{role.errorMessage}</p>}

      <Input
        label="email"
        type="email"
        value={email.value}
        onChange={(value: string) => email.onChange(value)}
        onBlur={email.onBlur}
      />
      {email.errorMessage && <p>{email.errorMessage}</p>}

      <Input
        label="password"
        type="password"
        value={password.value}
        onChange={(value: string) => password.onChange(value)}
        onBlur={password.onBlur}
      />
      {password.errorMessage && <p>{password.errorMessage}</p>}
    </fieldset>
  );
};

export default UserForm;
