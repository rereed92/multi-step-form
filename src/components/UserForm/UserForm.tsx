import React from 'react';
import { Input, Row, Column } from 'components';

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
      <Row>
        <Column width={6}>
          <Input
            label="name"
            value={name.value}
            onChange={name.onChange}
            errorMessage={name.errorMessage}
          />
        </Column>

        <Column width={6}>
          <Input
            label="role"
            value={role.value}
            onChange={role.onChange}
            errorMessage={role.errorMessage}
          />
        </Column>
      </Row>
      <Row>
        <Column width={6}>
          <Input
            label="email"
            type="email"
            value={email.value}
            onChange={email.onChange}
            errorMessage={email.errorMessage}
          />
        </Column>

        <Column width={6}>
          <Input
            label="password"
            type="password"
            value={password.value}
            onChange={password.onChange}
            errorMessage={password.errorMessage}
          />
        </Column>
      </Row>
    </fieldset>
  );
};

export default UserForm;
