import React from 'react';
import { shallowComponent } from 'utilities/testing';
import App from './App';

describe('First React component test with Enzyme', () => {
  it('renders without crashing', () => {
    shallowComponent(<App />);
  });
});
