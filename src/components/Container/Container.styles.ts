import { createUseStyles } from 'react-jss';
import { ITheme } from 'theme/types';

const useStyles = createUseStyles((theme: ITheme) => ({
  container: {
    maxWidth: theme.spacing.container,
    padding: { left: theme.spacing.padding, right: theme.spacing.padding },
  },
}));

export default useStyles;
