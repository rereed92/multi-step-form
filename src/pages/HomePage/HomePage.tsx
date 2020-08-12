/* eslint-disable no-console */
import React from 'react';
import { MultiStep, UserForm, PrivacyForm } from 'components';
import { IMultiStep } from 'components/MultiStep/types';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store';
import { submitData } from 'store/userDetails';

const HomePage = () => {
  const values = useSelector((state: RootState) => state.userDetails);
  const dispatch = useDispatch();

  const formSteps: IMultiStep = {
    components: [<UserForm />, <PrivacyForm />, <div>3</div>],
  };

  return (
    <>
      <h1>Heading</h1>
      <MultiStep
        steps={formSteps}
        onSubmit={() => dispatch(submitData(values))}
      />
    </>
  );
};

export default HomePage;
