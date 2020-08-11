import React from 'react';
import { MultiStep } from 'containers';
import { IMultiStep } from 'containers/MultiStep/types';

const formSteps: IMultiStep = {
  components: [<div>1</div>, <div>2</div>, <div>3</div>],
  store: 'details',
};

const HomePage = () => {
  return (
    <>
      <h1>Heading</h1>
      <MultiStep steps={formSteps} />
    </>
  );
};

export default HomePage;
