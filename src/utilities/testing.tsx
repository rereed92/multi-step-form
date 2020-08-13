import React from 'react';
import { shallow, mount } from 'enzyme';
import { ThemeProvider } from 'react-jss';
import themes from 'theme/themes';

export const shallowComponent = (component: any) => {
  return shallow(
    <ThemeProvider theme={themes.primary}>{component}</ThemeProvider>
  );
};

export const mountComponent = (component: any) => {
  return mount(
    <ThemeProvider theme={themes.primary}>{component}</ThemeProvider>
  );
};
