/* eslint-disable no-console */
import React, {
  useState,
  SyntheticEvent,
  Dispatch,
  SetStateAction,
} from 'react';
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
  setRole,
  setEmail,
  setPassword,
  setName,
} from 'store/userDetails';
import { findError, IValidation } from 'utilities/validations';
import { UserDetailsValidation } from 'validations/userDetails';
import { ActionCreatorWithOptionalPayload } from '@reduxjs/toolkit';
import { IInputPayload } from 'store/userDetails/types';

interface IUserErrorMessages {
  name: string | undefined;
  email: string | undefined;
  password: string | undefined;
}

export const onInputChange = (
  dispatch: Dispatch<any>,
  dispatchSetFunction: ActionCreatorWithOptionalPayload<IInputPayload, string>,
  setUserErrorMessages?: Dispatch<SetStateAction<IUserErrorMessages>>,
  userErrorMessages?: IUserErrorMessages,
  field?: 'name' | 'email' | 'password',
  validations?: IValidation[]
) => (value: string) => {
  dispatch(dispatchSetFunction({ input: value }));
  if (setUserErrorMessages)
    setUserErrorMessages({
      ...userErrorMessages,
      [field]: findError(validations, value),
    });
};

const HomePage = () => {
  const values = useSelector((state: RootState) => state.userDetails);
  const dispatch = useDispatch();

  const [showConfirmation, setShowConfirmation] = useState(false);
  const [userErrorMessages, setUserErrorMessages] = useState<
    IUserErrorMessages
  >({
    name: undefined,
    email: undefined,
    password: undefined,
  });

  const userProps = {
    name: {
      value: values.name,
      onChange: onInputChange(
        dispatch,
        setName,
        setUserErrorMessages,
        userErrorMessages,
        'name',
        UserDetailsValidation.name
      ),
      errorMessage: userErrorMessages.name,
    },
    role: {
      value: values.role,
      onChange: onInputChange(dispatch, setRole),
    },
    email: {
      value: values.email,
      onChange: onInputChange(
        dispatch,
        setEmail,
        setUserErrorMessages,
        userErrorMessages,
        'email',
        UserDetailsValidation.email
      ),
      errorMessage: userErrorMessages.email,
    },
    password: {
      value: values.password,
      onChange: onInputChange(
        dispatch,
        setPassword,
        setUserErrorMessages,
        userErrorMessages,
        'password',
        UserDetailsValidation.password
      ),
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
