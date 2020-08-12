/* eslint-disable no-console */
import React, { useState, SyntheticEvent } from 'react';
import {
  MultiStep,
  UserForm,
  PrivacyForm,
  Confirmation,
  Container,
} from 'components';
import { IMultiStep } from 'components/MultiStep/types';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store';
import {
  submitData,
  setName,
  setRole,
  setEmail,
  setPassword,
} from 'store/userDetails';
import { required, email, password, findError } from 'utilities/validations';

const HomePage = () => {
  const values = useSelector((state: RootState) => state.userDetails);
  const dispatch = useDispatch();

  const [showConfirmation, setShowConfirmation] = useState(false);
  const [userErrorMessages, setUserErrorMessages] = useState({
    name: undefined,
    email: undefined,
    password: undefined,
  });

  const userValidation = {
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

  const userProps = {
    name: {
      value: values.name,
      onChange: (value: string) => {
        dispatch(setName({ input: value }));
        setUserErrorMessages({
          ...userErrorMessages,
          name: findError(userValidation.name, value),
        });
      },
      errorMessage: userErrorMessages.name,
    },
    role: {
      value: values.role,
      onChange: (value: string) => dispatch(setRole({ input: value })),
    },
    email: {
      value: values.email,
      onChange: (value: string) => {
        dispatch(setEmail({ input: value }));
        setUserErrorMessages({
          ...userErrorMessages,
          email: findError(userValidation.email, value),
        });
      },
      errorMessage: userErrorMessages.email,
    },
    password: {
      value: values.password,
      onChange: (value: string) => {
        dispatch(setPassword({ input: value }));
        setUserErrorMessages({
          ...userErrorMessages,
          password: findError(userValidation.password, value),
        });
      },
      errorMessage: userErrorMessages.password,
    },
  };

  const formSteps: IMultiStep = {
    steps: [
      {
        component: <UserForm {...userProps} />,
        isStepValid: Object.values(userErrorMessages).every(
          (field: string) => field === ''
        ),
      },
      {
        component: <PrivacyForm />,
        isStepValid: true,
      },
    ],
  };

  return (
    <Container>
      <>
        <h1>Heading</h1>
        {!showConfirmation ? (
          <MultiStep
            formSteps={formSteps}
            onSubmit={(e: SyntheticEvent) => {
              e.preventDefault();
              setShowConfirmation(true);
              dispatch(submitData(values));
            }}
          />
        ) : (
          <Confirmation />
        )}
      </>
    </Container>
  );
};

export default HomePage;
