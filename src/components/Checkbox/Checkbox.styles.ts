import { createUseStyles } from 'react-jss';
import { ITheme } from 'theme/types';

const useStyles = createUseStyles((theme: ITheme) => ({
  checkbox: {
    position: 'relative',
    display: 'block',
    margin: `${theme.spacing.small}px 0`,
  },
  input: {
    position: 'absolute',
    opacity: 0,
    cursor: 'pointer',
    height: 0,
    width: 0,
    '&:checked ~ $label::before': {
      backgroundColor: theme.colors.primaryDark,
    },
  },
  label: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    '&::before': {
      content: '""',
      display: 'inline-block',
      width: 20,
      height: 20,
      flexShrink: 0,
      marginRight: theme.spacing.small,
      borderRadius: 5,
      border: `2px solid ${theme.colors.primaryDark}`,
    },
    '&::after': {
      content: '<CheckIcon />',
      position: 'absolute',
    },
  },
  icon: {
    position: 'absolute',
    top: '50%',
    left: 0,
    transform: 'translateY(-50%)',
    width: 24,
    height: 24,
    color: theme.colors.defaultLight,
    fill: 'currentColor',
  },
}));

export default useStyles;
