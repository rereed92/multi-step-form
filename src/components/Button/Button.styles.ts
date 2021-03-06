import { createUseStyles } from 'react-jss';
import { ITheme } from 'theme/types';

const useStyles = createUseStyles((theme: ITheme) => ({
  button: {
    backgroundColor: theme.colors.secondary,
    color: theme.colors.defaultLight,
    border: `2px solid ${theme.colors.secondary}`,
    borderRadius: 5,
    padding: `${theme.spacing.xs}px ${theme.spacing.small}px`,
    '&:disabled': {
      backgroundColor: theme.colors.light2,
      borderColor: theme.colors.light2,
    },
  },
  buttonSecondary: {
    composes: '$button',
    color: theme.colors.secondary,
    backgroundColor: theme.colors.defaultLight,
    borderColor: theme.colors.secondary,
    '&:disabled': {
      borderColor: theme.colors.light2,
      backgroundColor: theme.colors.defaultLight,
      color: theme.colors.light2,
    },
  },
}));

export default useStyles;
