import React from 'react';
import App from './App';
import { shallowComponent } from 'utilities/testing';

describe('First React component test with Enzyme', () => {
  it('renders without crashing', () => {
    shallowComponent(<App />);
  });
});
