import { createUseStyles } from 'react-jss';
import { ITheme } from 'theme/types';

const useStyles = createUseStyles((theme: ITheme) => ({
  buttons: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: theme.spacing.large,
    paddingTop: theme.spacing.large,
    borderTop: `2px solid ${theme.colors.secondary}`,
  },
}));

export default useStyles;
