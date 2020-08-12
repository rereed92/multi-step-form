import React, { useState, FormEvent, MouseEvent } from 'react';
import { IMultiStep } from './types';

export interface IMultiStepProps {
  formSteps: IMultiStep;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

const MultiStep = ({ formSteps, onSubmit }: IMultiStepProps) => {
  const { steps } = formSteps;
  const [step, setStep] = useState<number>(0);

  return (
    <form onSubmit={onSubmit}>
      {steps[step]}
      {step === steps.length - 1 ? (
        <button type="submit">Submit</button>
      ) : (
        <button
          type="button"
          onClick={(e: MouseEvent<HTMLButtonElement>) => {
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
