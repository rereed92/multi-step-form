import React from 'react';
import { mountComponent, getTestId } from 'utilities/testing';
import { ReactWrapper } from 'enzyme';
import MultiStep from './MultiStep';

describe('MultiStep', () => {
  let wrapper: ReactWrapper;

  const props = {
    formSteps: [
      {
        title: 'Title 1',
        component: <div>1</div>,
        isStepValid: false,
      },
      {
        title: 'Title 2',
        component: <div>2</div>,
        isStepValid: true,
      },
    ],
    onSubmit: jest.fn(),
  };

  beforeEach(() => {
    wrapper = mountComponent(<MultiStep {...props} />);
  });

  it('renders correctly', () => {
    expect(wrapper.find(getTestId('steps'))).toHaveLength(2);
    expect(wrapper.find(getTestId('form'))).toHaveLength(1);
  });

  it('submits the form correctly', () => {
    wrapper.find(getTestId('form')).simulate('submit');
    expect(props.onSubmit).toHaveBeenCalled();
  });

  it('handles the button logic correctly for a step that is not valid', () => {
    const backButton = wrapper.find(getTestId('backButton'));
    const nextButton = wrapper.find(getTestId('nextButton'));
    const submitButton = wrapper.find(getTestId('submitButton'));

    expect(backButton).toHaveLength(1);
    expect(backButton.prop('disabled')).toBeTruthy();

    expect(nextButton).toHaveLength(1);
    expect(nextButton.prop('disabled')).toBeTruthy();

    expect(submitButton).toHaveLength(0);
  });

  it('handles the button logic correctly for the first step that valid', () => {
    const newProps = {
      ...props,
      formSteps: [
        {
          title: 'Title 1',
          component: <div>1</div>,
          isStepValid: true,
        },
        props.formSteps[1],
      ],
      onSubmit: jest.fn(),
    };

    wrapper = mountComponent(<MultiStep {...newProps} />);

    const nextButton = wrapper.find(getTestId('nextButton'));

    expect(nextButton).toHaveLength(1);
    expect(nextButton.prop('disabled')).toBeFalsy();

    const mockedEvent = { preventDefault: jest.fn() };
    nextButton.simulate('click', mockedEvent);
    expect(mockedEvent.preventDefault).toHaveBeenCalled();
  });
});
