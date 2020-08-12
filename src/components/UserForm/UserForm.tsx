import React from 'react';
import { RootState } from 'store';
import { useSelector, useDispatch } from 'react-redux';
import { Input } from 'components';
import { setName, setRole, setEmail, setPassword } from 'store/userDetails';

const UserForm = () => {
  const dispatch = useDispatch();
  const { name, role, email, password } = useSelector(
    (state: RootState) => state.userDetails
  );
  return (
    <fieldset>
      <Input
        label="name"
        value={name}
        onChange={(value: string) => dispatch(setName({ input: value }))}
      />

      <Input
        label="role"
        value={role}
        onChange={(value: string) => dispatch(setRole({ input: value }))}
      />

      <Input
        label="email"
        type="email"
        value={email}
        onChange={(value: string) => dispatch(setEmail({ input: value }))}
      />

      <Input
        label="password"
        type="password"
        value={password}
        onChange={(value: string) => dispatch(setPassword({ input: value }))}
      />
    </fieldset>
  );
};

export default UserForm;
