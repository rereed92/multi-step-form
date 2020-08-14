import { ITheme } from 'theme/types';

const baseFormStyles = (theme: ITheme) => ({
  fieldset: {
    padding: 0,
    margin: 0,
    border: 'none',
  },
  legend: {
    color: theme.colors.default,
    fontSize: theme.fontSizes.subTitle,
    marginBottom: theme.spacing.large,
  },
});

export default baseFormStyles;
