import { createUseStyles } from 'react-jss';
import { ITheme } from 'theme/types';

const useStyles = createUseStyles((theme: ITheme) => ({
  container: {
    maxWidth: theme.spacing.container,
    padding: `0 ${theme.spacing.large}px`,
    margin: '0 auto',
  },
}));

export default useStyles;
