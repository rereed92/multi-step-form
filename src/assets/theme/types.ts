/**
 * Here we declare properties of a generic
 * theme so all themes use the same interface
 */
export interface ITheme {
  colors: {
    primary: string;
    primaryDark: string;
    secondary: string;
    secondaryDark: string;
    default: string;
    defaultLight: string;
    light1: string;
    light2: string;
  };
  fontSizes: {
    h1: number;
    h2: number;
    h3: number;
    h4: number;
    h5: number;
    title: number;
    subTitle: number;
    body: number;
    small: number;
  };
  spacing: {
    container: number;
    xs: number;
    small: number;
    medium: number;
    large: number;
  };
  breakpoints: {
    md: number;
    lg: number;
  };
  settings: {
    headerHeight: number;
    footerHeight: number;
  };
}
