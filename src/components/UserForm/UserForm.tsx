import React from 'react';
import { Input } from 'components';

interface IUserForm {
  name: {
    value: string;
    onChange: (value: string) => void;
    errorMessage?: string;
  };
  role: {
    value: string;
    onChange: (value: string) => void;
    errorMessage?: string;
  };
  email: {
    value: string;
    onChange: (value: string) => void;
    errorMessage?: string;
  };
  password: {
    value: string;
    onChange: (value: string) => void;
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
      />
      {name.errorMessage && <p>{name.errorMessage}</p>}

      <Input
        label="role"
        value={role.value}
        onChange={(value: string) => role.onChange(value)}
      />
      {role.errorMessage && <p>{role.errorMessage}</p>}

      <Input
        label="email"
        type="email"
        value={email.value}
        onChange={(value: string) => email.onChange(value)}
      />
      {email.errorMessage && <p>{email.errorMessage}</p>}

      <Input
        label="password"
        type="password"
        value={password.value}
        onChange={(value: string) => password.onChange(value)}
      />
      {password.errorMessage && <p>{password.errorMessage}</p>}
    </fieldset>
  );
};

export default UserForm;
