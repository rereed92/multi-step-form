import React from 'react';
import { mountComponent, getTestId } from 'utilities/testing';
import { ReactWrapper } from 'enzyme';
import Button from './Button';

describe('Button', () => {
  let wrapper: ReactWrapper;
  const props = {
    onClick: jest.fn(),
    text: 'Primary',
  };

  beforeEach(() => {
    wrapper = mountComponent(<Button {...props} />);
  });

  it('renders correctly for default properties', () => {
    const button = wrapper.find(getTestId('button'));
    expect(button.prop('type')).toEqual('button');
    expect(button.prop('disabled')).toBeFalsy();
    expect(button.prop('onClick')).toEqual(props.onClick);
    expect(button.text()).toEqual(props.text);

    button.simulate('click');
    expect(props.onClick).toHaveBeenCalled();
  });
});
