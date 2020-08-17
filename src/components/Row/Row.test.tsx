import React from 'react';
import { mountComponent, getTestId } from 'utilities/testing';
import { ReactWrapper } from 'enzyme';
import Row from './Row';

describe('Row', () => {
  let wrapper: ReactWrapper;

  const props = {
    children: <div>row</div>,
  };

  beforeEach(() => {
    wrapper = mountComponent(<Row {...props} />);
  });

  it('renders correctly with one child', () => {
    expect(wrapper.find(getTestId('row'))).toHaveLength(1);
  });
});
