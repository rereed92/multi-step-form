import { createUseStyles } from 'react-jss';
import baseFormStyles from 'styles/components/form.styles';
import { ITheme } from 'theme/types';

const useStyles = createUseStyles((theme: ITheme) => ({
  ...baseFormStyles(theme),
}));

export default useStyles;
