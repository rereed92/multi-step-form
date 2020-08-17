import { ReactElement } from 'react';

export interface IMultiStep {
  title: string;
  component: ReactElement;
  isStepValid: boolean;
}
