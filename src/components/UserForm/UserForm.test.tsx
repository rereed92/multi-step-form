import React from 'react';
import { mountComponent, getTestId } from 'utilities/testing';
import { ReactWrapper } from 'enzyme';
import UserForm from './UserForm';

describe('UserForm', () => {
  let wrapper: ReactWrapper;

  const props = {
    name: {
      value: 'Name',
      onChange: jest.fn(),
      errorMessage: 'Name error',
    },
    role: {
      value: 'Role',
      onChange: jest.fn(),
    },
    email: {
      value: 'Email',
      onChange: jest.fn(),
      errorMessage: 'Email error',
    },
    password: {
      value: 'Password',
      onChange: jest.fn(),
      errorMessage: 'Password error',
    },
  };

  const mockedEvent = { target: { value: 'value' } };

  beforeEach(() => {
    wrapper = mountComponent(<UserForm {...props} />);
  });

  it('should render correctly', () => {
    expect(wrapper.find(getTestId('nameInput'))).toHaveLength(1);
    expect(wrapper.find(getTestId('roleInput'))).toHaveLength(1);
    expect(wrapper.find(getTestId('emailInput'))).toHaveLength(1);
    expect(wrapper.find(getTestId('passwordInput'))).toHaveLength(1);
  });

  it('should handle the name input correctly', () => {
    const name = getTestId('nameInput');
    expect(wrapper.find(name).prop('value')).toEqual(props.name.value);

    wrapper.find(name).simulate('change', mockedEvent);
    expect(props.name.onChange).toHaveBeenCalled();
  });

  it('should handle the role input correctly', () => {
    const role = getTestId('roleInput');
    expect(wrapper.find(role).prop('value')).toEqual(props.role.value);

    wrapper.find(role).simulate('change', mockedEvent);
    expect(props.role.onChange).toHaveBeenCalled();
  });

  it('should handle the email input correctly', () => {
    const email = getTestId('emailInput');
    expect(wrapper.find(email).prop('value')).toEqual(props.email.value);

    wrapper.find(email).simulate('change', mockedEvent);
    expect(props.email.onChange).toHaveBeenCalled();
  });

  it('should handle the password input correctly', () => {
    const password = getTestId('passwordInput');
    expect(wrapper.find(password).prop('value')).toEqual(props.password.value);

    wrapper.find(password).simulate('change', mockedEvent);
    expect(props.password.onChange).toHaveBeenCalled();
  });
});
