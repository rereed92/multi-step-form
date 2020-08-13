import { ITheme } from 'theme/types';

const primary: ITheme = {
  colors: {
    primary: '#9CC0E7',
    primaryDark: '#030027',
    secondary: '#8E5572',
    secondaryDark: '#443850',
    default: '#000000',
    defaultLight: '#FFFFFF',
    light1: '#EDEDED',
  },
  fontSizes: {
    H1: 40,
    H2: 30,
    H3: 25,
    H4: 20,
    H5: 18,
    title: 20,
    subTitle: 18,
    body: 16,
    small: 14,
  },
  spacing: {
    container: 1140,
    padding: 20,
    margin: {
      xs: 5,
      small: 10,
      medium: 15,
      large: 20,
    },
  },
  breakpoints: {
    md: 768,
    lg: 992,
  },
};

export default primary;
