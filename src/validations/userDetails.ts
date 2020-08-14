import { required, email, password } from 'utilities/validations';

const UserDetailsValidation = {
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
      message:
        'Password needs be at least 9 characters with one number, one uppercase and one lowercase character',
    },
  ],
};

export default UserDetailsValidation;
