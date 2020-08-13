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
  };
  fontSizes: {
    H1: number;
    H2: number;
    H3: number;
    H4: number;
    H5: number;
    title: number;
    subTitle: number;
    body: number;
    small: number;
  };
  spacing: {
    container: number;
    padding: number;
    margin: {
      xs: number;
      small: number;
      medium: number;
      large: number;
    };
  };
  breakpoints: {
    md: number;
    lg: number;
  };
}
