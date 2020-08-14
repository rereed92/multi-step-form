import { createUseStyles } from 'react-jss';
import { ITheme } from 'theme/types';

const useStyles = createUseStyles((theme: ITheme) => ({
  confirmation: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  icon: {
    color: theme.colors.defaultLight,
    fill: 'currentColor',
    height: 70,
    width: 70,
    display: 'inline-block',
    backgroundColor: theme.colors.secondary,
    borderRadius: '50%',
    padding: theme.spacing.xs,
    marginBottom: theme.spacing.medium,
  },
}));

export default useStyles;
