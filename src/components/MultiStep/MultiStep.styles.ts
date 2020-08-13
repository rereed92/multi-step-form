import { createUseStyles } from 'react-jss';
import { ITheme } from 'theme/types';

const useStyles = createUseStyles((theme: ITheme) => ({
  steps: {
    display: 'flex',
    justifyContent: 'center',
    padding: 0,
    margin: 0,
  },
  step: {
    display: 'inline-flex',
    width: 30,
    height: 30,
    borderRadius: '50%',
    backgroundColor: theme.colors.light2,
    color: theme.colors.defaultLight,
    justifyContent: 'center',
    alignItems: 'center',
    margin: `0 30px`,
  },
  stepActive: {
    composes: '$step',
    backgroundColor: theme.colors.secondary,
  },
  buttons: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: theme.spacing.large,
  },
}));

export default useStyles;
