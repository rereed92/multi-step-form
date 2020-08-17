import React from 'react';
import { Input, Row, Column } from 'components';
import { useTheme } from 'react-jss';
import useStyles from './UserForm.styles';

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
  const theme = useTheme();
  const classes = useStyles({ theme });

  return (
    <fieldset className={classes.fieldset}>
      <legend className={classes.legend}>User Details</legend>
      <Row>
        <Column xs={12} md={6}>
          <Input
            testId="nameInput"
            label="Name *"
            value={name.value}
            onChange={name.onChange}
            errorMessage={name.errorMessage}
          />
        </Column>

        <Column xs={12} md={6}>
          <Input
            testId="roleInput"
            label="Role"
            value={role.value}
            onChange={role.onChange}
            errorMessage={role.errorMessage}
          />
        </Column>
      </Row>
      <Row>
        <Column xs={12} md={6}>
          <Input
            testId="emailInput"
            label="Email *"
            type="email"
            value={email.value}
            onChange={email.onChange}
            errorMessage={email.errorMessage}
          />
        </Column>

        <Column xs={12} md={6}>
          <Input
            testId="passwordInput"
            label="Password *"
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
