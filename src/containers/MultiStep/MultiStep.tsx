import React, { useState } from 'react';
import { IMultiStep } from './types';

export interface IMultiStepProps {
  steps: IMultiStep;
}

const MultiStep = ({ steps }: IMultiStepProps) => {
  const [step, setStep] = useState<number>(0);
  return (
    <form>
      {steps.components[step]}
      <button type="button" onClick={() => setStep(step + 1)}>
        Submit
      </button>
    </form>
  );
};

export default MultiStep;
