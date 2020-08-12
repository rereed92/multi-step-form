/* eslint-disable import/prefer-default-export */
import { required, email, password } from 'utilities/validations';

export const UserDetailsValidation = {
  name: [
    {
      rule: required,
      message: 'Name is a required field',
    },
  ],
  email: [
    {
      rule: required,
      message: 'Email is a required field',
    },
    {
      rule: email,
      message: 'Email needs to be a valid email',
    },
  ],
  password: [
    {
      rule: required,
      message: 'Password is a required field',
    },
    {
      rule: password,
      message: 'Password needs to match the criteria',
    },
  ],
};
