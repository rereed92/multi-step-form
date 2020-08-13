import { createUseStyles } from 'react-jss';
import { ITheme } from 'theme/types';

const useStyles = createUseStyles((theme: ITheme) => ({
  fieldset: {
    padding: 0,
    margin: 0,
    border: 'none',
  },
  legend: {
    color: theme.colors.default,
    fontSize: theme.fontSizes.subTitle,
    marginBottom: theme.spacing.medium,
  },
}));

export default useStyles;
