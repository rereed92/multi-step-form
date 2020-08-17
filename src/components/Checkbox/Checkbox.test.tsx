import React from 'react';
import { mountComponent, getTestId } from 'utilities/testing';
import { ReactWrapper } from 'enzyme';
import Checkbox from './Checkbox';

describe('Checkbox', () => {
  let wrapper: ReactWrapper;
  const props = {
    label: 'Label',
    value: false,
    onChange: jest.fn(),
  };

  beforeEach(() => {
    wrapper = mountComponent(<Checkbox {...props} />);
  });

  it('renders correctly for default properties when the checkbox is not checked', () => {
    const checkbox = wrapper.find(getTestId('checkbox'));
    expect(checkbox).toHaveLength(1);
    expect(checkbox.prop('checked')).toEqual(props.value);
    expect(wrapper.find(getTestId('label')).text()).toEqual(props.label);
    expect(wrapper.find(getTestId('icon'))).toHaveLength(0);
  });

  it('renders correctly for default properties when the checkbox is checked', () => {
    const newProps = {
      ...props,
      value: true,
    };
    wrapper = mountComponent(<Checkbox {...newProps} />);

    expect(wrapper.find(getTestId('checkbox')).prop('checked')).toEqual(
      newProps.value
    );
    expect(wrapper.find(getTestId('icon'))).toHaveLength(1);
  });

  it('should handle onChange correctly', () => {
    const mockedEvent = { target: { checked: true } };
    wrapper.find(getTestId('checkbox')).simulate('change', mockedEvent);
    expect(props.onChange).toHaveBeenCalledWith(true);
  });
});
