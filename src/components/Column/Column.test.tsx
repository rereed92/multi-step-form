import React from 'react';
import { mountComponent, getTestId } from 'utilities/testing';
import { ReactWrapper } from 'enzyme';
import Column, { ColumnWidth } from './Column';

describe('Column', () => {
  let wrapper: ReactWrapper;
  const props = {
    children: <div>Column</div>,
    xs: 12 as ColumnWidth,
  };

  beforeEach(() => {
    wrapper = mountComponent(<Column {...props} />);
  });

  it('renders correctly', () => {
    const column = wrapper.find(getTestId('column'));
    expect(column).toHaveLength(1);
    expect(column.prop('children')).toEqual(props.children);
  });
});
