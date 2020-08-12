import { ReactElement } from 'react';

export interface IMultiStep {
  steps: {
    component: ReactElement;
    isStepValid: boolean;
  }[];
}
