import React, { useState, FormEvent, MouseEvent } from 'react';
import { Button, Stepper } from 'components';
import { useTheme } from 'react-jss';
import { IMultiStep } from './types';
import useStyles from './MultiStep.styles';

export interface IMultiStepProps {
  formSteps: IMultiStep;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

const MultiStep = ({ formSteps, onSubmit }: IMultiStepProps) => {
  const theme = useTheme();
  const classes = useStyles({ theme });

  const { steps } = formSteps;
  const [step, setStep] = useState<number>(0);

  return (
    <>
      <Stepper steps={steps} currentStep={step} />
      <form onSubmit={onSubmit}>
        {steps[step].component}
        <div className={classes.buttons}>
          <Button
            secondary
            disabled={step === 0}
            onClick={(e: MouseEvent<HTMLButtonElement>) => {
              e.preventDefault();
              setStep(step - 1);
            }}
            text="Back"
          />
          {step === steps.length - 1 ? (
            <Button
              type="submit"
              disabled={!steps[step].isStepValid}
              onClick={() => {}}
              text="Submit"
            />
          ) : (
            <Button
              disabled={!steps[step].isStepValid}
              onClick={(e: MouseEvent<HTMLButtonElement>) => {
                e.preventDefault();
                setStep(step + 1);
              }}
              text="Next"
            />
          )}
        </div>
      </form>
    </>
  );
};

export default MultiStep;
