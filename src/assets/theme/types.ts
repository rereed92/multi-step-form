/**
 * Here we declare properties of a generic
 * theme so all themes use the same interface
 */
export interface ITheme {
  colors: {
    primaryColor1: {
      primary1: string;
      primary2: string;
      light: string;
      dark1: string;
      dark2: string;
    };
    primaryColor2: {
      primary1: string;
      primary2: string;
      light: string;
      dark1: string;
      dark2: string;
    };
    transparent: string;
    default: string;
    defaultLight: string;
    light1: string;
    light2: string;
    light3: string;
    light4: string;
    light5: string;
    light6: string;
    light7: string;
  };
  fonts: {
    regular: string;
    bold: string;
    semiBold: string;
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
    error: number;
  };
  spacing: {
    container: number;
    padding: number;
  };
}
