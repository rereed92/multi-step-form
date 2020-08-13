import { createUseStyles } from 'react-jss';
import { ITheme } from 'theme/types';

const useStyles = createUseStyles((theme: ITheme) => ({
  footer: {
    background: theme.colors.primaryDark,
    height: theme.settings.footerHeight,
  },
}));

export default useStyles;
