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
import { submitData } from 'store/userDetails';

const HomePage = () => {
  const values = useSelector((state: RootState) => state.userDetails);
  const dispatch = useDispatch();

  const [showConfirmation, setShowConfirmation] = useState(false);

  const formSteps: IMultiStep = {
    steps: [<UserForm />, <PrivacyForm />],
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
