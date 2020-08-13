import { createUseStyles } from 'react-jss';
import { ITheme } from 'theme/types';

const useStyles = createUseStyles((theme: ITheme) => ({
  content: {
    padding: `${theme.spacing.large}px 0`,
    minHeight: `calc(100vh - ${
      theme.settings.headerHeight + theme.settings.footerHeight
    }px)`,
  },
}));

export default useStyles;
