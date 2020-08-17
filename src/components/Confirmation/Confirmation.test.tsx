import React from 'react';
import { mountComponent, getTestId } from 'utilities/testing';
import { ReactWrapper } from 'enzyme';
import Confirmation from './Confirmation';

describe('Confirmation', () => {
  let wrapper: ReactWrapper;

  beforeEach(() => {
    wrapper = mountComponent(<Confirmation />);
  });

  it('renders correctly', () => {
    expect(wrapper.find(getTestId('icon'))).toHaveLength(1);
    expect(wrapper.find(getTestId('text'))).toHaveLength(1);
  });
});
