import React from 'react';
import { mountComponent, getTestId } from 'utilities/testing';
import { ReactWrapper } from 'enzyme';
import Input from './Input';

describe('Input', () => {
  let wrapper: ReactWrapper;

  const props = {
    label: 'Label',
    value: 'input value',
    onChange: jest.fn(),
    onBlur: jest.fn(),
  };

  beforeEach(() => {
    wrapper = mountComponent(<Input {...props} />);
  });

  it('renders correctly for default properties when there is no error message', () => {
    const input = wrapper.find(getTestId('input'));
    expect(input).toHaveLength(1);
    expect(input.prop('value')).toEqual(props.value);
    expect(input.prop('placeholder')).toEqual('');
    expect(input.prop('type')).toEqual('text');
    expect(wrapper.find(getTestId('label')).text()).toEqual(props.label);
    expect(wrapper.find(getTestId('error'))).toHaveLength(0);
  });

  it('renders correctly for default properties when there is an error', () => {
    const newProps = {
      ...props,
      errorMessage: 'Error',
    };
    const error = getTestId('error');
    wrapper = mountComponent(<Input {...newProps} />);

    expect(wrapper.find(error)).toHaveLength(1);
    expect(wrapper.find(error).text()).toEqual(newProps.errorMessage);
  });

  it('should handle onChange correctly', () => {
    const mockedEvent = { target: { value: 'value' } };
    wrapper.find(getTestId('input')).simulate('change', mockedEvent);
    expect(props.onChange).toHaveBeenCalledWith('value');
  });

  it('should handle onBlur correctly', () => {
    wrapper.find(getTestId('input')).simulate('blur');
    expect(props.onBlur).toHaveBeenCalled();
  });
});
