import React from 'react';
import { mountComponent, getTestId } from 'utilities/testing';
import { ReactWrapper } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import * as userDetailsStore from 'store/userDetails';
import * as validationTests from 'utilities/validations';
import HomePage, { onInputChange, IUserErrorMessages } from './HomePage';

describe('HomePage', () => {
  let wrapper: ReactWrapper;

  const userDetails = {
    name: 'Name',
    role: 'Role',
    email: 'Email',
    password: 'Password',
    productUpdates: false,
    otherProductUpdates: false,
  };

  const mockStore = configureMockStore([thunk]);
  const store = mockStore({
    userDetails,
  });

  beforeEach(() => {
    wrapper = mountComponent(
      <Provider store={store}>
        <HomePage />
      </Provider>
    );
  });

  it('should render correctly', () => {
    expect(wrapper.find(getTestId('form'))).toHaveLength(1);
  });

  it('should handle onSubmit correctly', () => {
    const mockedEvent = { preventDefault: jest.fn() };
    const submitDataSpy = jest.spyOn(userDetailsStore, 'submitData');

    wrapper.find(getTestId('form')).simulate('submit', mockedEvent);
    expect(mockedEvent.preventDefault).toHaveBeenCalled();
    expect(submitDataSpy).toHaveBeenCalledWith(userDetails);
  });

  it('should handle onInputChange correctly when there are no error messages', () => {
    const dispatch = jest.fn();
    const dispatchSetFunction = jest.fn() as any;
    const value = 'Value';

    onInputChange(dispatch, dispatchSetFunction)(value);

    expect(dispatchSetFunction).toHaveBeenCalledWith({ input: value });
  });

  it('should handle onInputChange correctly when there are error messages', () => {
    const findErrorSpy = jest.spyOn(validationTests, 'findError');

    const dispatch = jest.fn();
    const dispatchSetFunction = jest.fn() as any;
    const setUserErrorMessages = jest.fn();
    const userErrorMessages = {
      name: 'Name Error',
    } as IUserErrorMessages;
    const field = 'name';
    const validations = [
      {
        rule: jest.fn(() => true),
        message: 'This is a required field',
      },
    ];
    const value = 'Value';

    onInputChange(
      dispatch,
      dispatchSetFunction,
      setUserErrorMessages,
      userErrorMessages,
      field,
      validations
    )(value);

    expect(dispatchSetFunction).toHaveBeenCalledWith({ input: value });
    expect(setUserErrorMessages).toHaveBeenCalledWith({ name: '' });
    expect(findErrorSpy).toHaveBeenCalledWith(validations, value);
  });
});
