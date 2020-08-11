import React from 'react';
import themes from 'theme/themes';
import { shallow, mount } from 'enzyme';
import { ThemeProvider } from 'react-jss';

export const shallowComponent = (component: any) => {
  return shallow(<ThemeProvider theme={themes.primary}>{component}</ThemeProvider>);
}

export const mountComponent = (component: any) => {
  return mount(<ThemeProvider theme={themes.primary}>{component}</ThemeProvider>);
}
