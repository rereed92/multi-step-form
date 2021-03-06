import { createUseStyles } from 'react-jss';
import { ITheme } from 'theme/types';

const useStyles = createUseStyles((theme: ITheme) => ({
  header: {
    background: theme.colors.primary,
    height: theme.settings.headerHeight,
  },
}));

export default useStyles;
