import { createUseStyles } from 'react-jss';
import { ITheme } from 'theme/types';

const useStyles = createUseStyles((theme: ITheme) => ({
  inputWrapper: {
    marginBottom: theme.spacing.margin.large,
  },
  wrapper: {
    display: 'block',
    marginBottom: theme.spacing.margin.small,
  },
  input: {
    display: 'block',
    width: '100%',
  },
  label: {
    display: 'inline-block',
    marginBottom: theme.spacing.margin.xs,
  },
  error: {
    fontSize: theme.fontSizes.small,
    margin: 0,
  },
}));

export default useStyles;
