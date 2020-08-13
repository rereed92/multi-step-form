import { ITheme } from 'theme/types';

const primary: ITheme = {
  colors: {
    primary: '#9CC0E7',
    primaryDark: '#030027',
    secondary: '#8E5572',
    secondaryDark: '#443850',
    default: '#333333',
    defaultLight: '#FFFFFF',
    light1: '#EDEDED',
    light2: '#CCCCCC',
  },
  fontSizes: {
    h1: 30,
    h2: 25,
    h3: 22,
    h4: 20,
    h5: 18,
    title: 20,
    subTitle: 18,
    body: 16,
    small: 14,
  },
  spacing: {
    container: 1140,
    xs: 5,
    small: 10,
    medium: 15,
    large: 20,
  },
  breakpoints: {
    md: 768,
    lg: 992,
  },
  settings: {
    headerHeight: 50,
    footerHeight: 100,
  },
};

export default primary;
