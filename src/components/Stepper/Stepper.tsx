import React from 'react';
import { useTheme } from 'react-jss';
import classNames from 'classnames';
import { IStep } from './types';
import useStyles from './Stepper.styles';

export interface IStepperProps {
  steps: IStep[];
  currentStep: number;
}

const Stepper = ({ steps, currentStep }: IStepperProps) => {
  const theme = useTheme();
  const classes = useStyles({ theme });

  return (
    <ul className={classes.steps}>
      {steps.map((step: IStep, index) => {
        const active = currentStep >= index;
        return (
          <li
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            className={classes.step}
          >
            <span
              className={classNames([
                {
                  [classes.stepLine]: !active,
                  [classes.stepLineActive]: active,
                },
              ])}
            />
            <div className={classes.stepWrapper}>
              <span
                className={classNames([
                  {
                    [classes.circle]: !active,
                    [classes.circleActive]: active,
                  },
                ])}
              >
                {index + 1}
              </span>
              <span className={classes.title}>{step.title}</span>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Stepper;
