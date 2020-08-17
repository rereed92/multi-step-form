import React from 'react';
import { mountComponent, getTestId } from 'utilities/testing';
import { ReactWrapper } from 'enzyme';
import Heading from './Heading';

describe('Heading', () => {
  let wrapper: ReactWrapper;

  const props = {
    children: 'Title',
  };

  ['h1', 'h2', 'h3', 'h4', 'h5'].forEach((test) => {
    it(`should render the correct heading for ${test}`, () => {
      wrapper = mountComponent(<Heading {...props} size={test} />);
      expect(wrapper.find(getTestId(`heading-${test}`))).toHaveLength(1);
    });
  });

  it('should render the title correctly', () => {
    wrapper = mountComponent(<Heading {...props} size="h2" />);
    expect(wrapper.find(getTestId('heading-h2')).text()).toEqual(
      props.children
    );
  });
});
