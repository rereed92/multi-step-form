import React from 'react';
import { mountComponent, getTestId } from 'utilities/testing';
import { ReactWrapper } from 'enzyme';
import Container from './Container';

describe('Container', () => {
  let wrapper: ReactWrapper;

  const props = {
    children: <div>container</div>,
  };

  beforeEach(() => {
    wrapper = mountComponent(<Container {...props} />);
  });

  it('renders correctly with one child', () => {
    expect(wrapper.find(getTestId('container'))).toHaveLength(1);
  });
});
