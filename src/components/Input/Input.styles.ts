import { createUseStyles } from 'react-jss';
import { ITheme } from 'theme/types';

const useStyles = createUseStyles((theme: ITheme) => ({
  inputWrapper: {
    marginBottom: theme.spacing.large,
  },
  wrapper: {
    display: 'block',
    marginBottom: theme.spacing.small,
    fontSize: theme.fontSizes.body,
    position: 'relative',
  },
  input: {
    display: 'block',
    width: '100%',
    padding: theme.spacing.xs,
    borderRadius: 5,
    border: `2px solid ${theme.colors.primaryDark}`,
    '&:focus': {
      outline: 'none',
      borderColor: theme.colors.primary,
    },
  },
  label: {
    display: 'inline-block',
    marginBottom: theme.spacing.xs,
    fontSize: theme.fontSizes.small,
  },
  error: {
    fontSize: theme.fontSizes.small,
    margin: 0,
  },
}));

export default useStyles;
