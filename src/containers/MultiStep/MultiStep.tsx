import React, { useState, SyntheticEvent } from 'react';
import { IMultiStep } from './types';

export interface IMultiStepProps {
  steps: IMultiStep;
  onSubmit: () => void;
}

const MultiStep = ({ steps, onSubmit }: IMultiStepProps) => {
  const [step, setStep] = useState<number>(0);

  return (
    <form onSubmit={onSubmit}>
      {steps.components[step]}
      {step === steps.components.length - 1 ? (
        <button type="submit">Submit</button>
      ) : (
        <button
          type="button"
          onClick={(e: SyntheticEvent) => {
            e.preventDefault();
            setStep(step + 1);
          }}
        >
          Next
        </button>
      )}
    </form>
  );
};

export default MultiStep;
