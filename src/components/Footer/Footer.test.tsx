import React from 'react';
import { mountComponent, getTestId } from 'utilities/testing';
import { ReactWrapper } from 'enzyme';
import Footer from './Footer';

describe('Footer', () => {
  let wrapper: ReactWrapper;

  beforeEach(() => {
    wrapper = mountComponent(<Footer />);
  });

  it('renders correctly', () => {
    expect(wrapper.find(getTestId('footer'))).toHaveLength(1);
  });
});
