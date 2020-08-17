import React from 'react';
import { mountComponent, getTestId } from 'utilities/testing';
import { ReactWrapper } from 'enzyme';
import Header from './Header';

describe('Header', () => {
  let wrapper: ReactWrapper;

  beforeEach(() => {
    wrapper = mountComponent(<Header />);
  });

  it('renders correctly', () => {
    expect(wrapper.find(getTestId('header'))).toHaveLength(1);
  });
});
