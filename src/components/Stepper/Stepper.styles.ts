import { createUseStyles } from 'react-jss';
import { ITheme } from 'theme/types';

const circleRadius = 30;

const useStyles = createUseStyles((theme: ITheme) => ({
  steps: {
    display: 'flex',
    justifyContent: 'center',
    padding: 0,
    margin: `${theme.spacing.xlarge}px 0`,
    listStyle: 'none',
  },
  step: {
    flex: 1,
    position: 'relative',
    '&:first-child $stepLine': {
      left: '50%',
    },
    '&:last-child $stepLine': {
      right: '50%',
    },
  },
  stepWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  stepLine: {
    flex: '1 1 auto',
    display: 'block',
    top: circleRadius / 2,
    left: 0,
    right: 0,
    position: 'absolute',
    height: 2,
    background: theme.colors.light2,
    zIndex: -1,
  },
  stepLineActive: {
    composes: '$stepLine',
    backgroundColor: theme.colors.secondary,
  },
  circle: {
    display: 'inline-flex',
    width: circleRadius,
    height: circleRadius,
    borderRadius: '50%',
    backgroundColor: theme.colors.light2,
    color: theme.colors.defaultLight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleActive: {
    composes: '$circle',
    backgroundColor: theme.colors.secondary,
  },
  title: {
    display: 'inline-block',
    marginTop: theme.spacing.xs,
    fontSize: theme.fontSizes.small,
  },
}));

export default useStyles;
