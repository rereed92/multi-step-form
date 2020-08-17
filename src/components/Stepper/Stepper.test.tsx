import React from 'react';
import { mountComponent, getTestId } from 'utilities/testing';
import { ReactWrapper } from 'enzyme';
import Stepper from './Stepper';

describe('Stepper', () => {
  let wrapper: ReactWrapper;

  const props = {
    steps: [
      {
        title: 'Title 1',
        component: <div>1</div>,
        isStepValid: true,
      },
      {
        title: 'Title 2',
        component: <div>2</div>,
        isStepValid: true,
      },
    ],
    currentStep: 0,
  };

  beforeEach(() => {
    wrapper = mountComponent(<Stepper {...props} />);
  });

  it('renders correctly', () => {
    const title = wrapper.find(getTestId('title'));
    expect(wrapper.find(getTestId('steps'))).toHaveLength(2);
    expect(title.at(0).text()).toEqual(props.steps[0].title);
    expect(title.at(1).text()).toEqual(props.steps[1].title);
  });
});
