import { ITheme } from 'theme/types';

const primary: ITheme = {
  colors: {
    primaryColor1: {
      primary1: '#00A39F',
      primary2: '#46E9E4',
      light: '#81FFFD',
      dark1: '#008985',
      dark2: '#00514E',
    },
    primaryColor2: {
      primary1: '#E0678D',
      primary2: '#81FFFD',
      light: '#FFF9FB',
      dark1: '#CB2A5D',
      dark2: '#880F35',
    },
    transparent: '#00000000',
    default: '#000000',
    defaultLight: '#FFFFFF',
    light1: '#979797',
    light2: '#737373',
    light3: '#8C8C8C',
    light4: '#D8D8D8',
    light5: '#595959',
    light6: '#4F4F4F',
    light7: '#666666',
  },
  fonts: {
    regular: 'Montserrat-Regular',
    bold: 'Montserrat-Bold',
    semiBold: 'Montserrat-SemiBold',
  },
  fontSizes: {
    H1: 40,
    H2: 32,
    H3: 28,
    H4: 24,
    H5: 20,
    title: 20,
    subTitle: 18,
    body: 16,
    small: 14,
    error: 12,
  },
  spacing: {
    container: 1140,
    padding: 20,
  },
};

export default primary;
