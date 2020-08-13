import { createUseStyles } from 'react-jss';
import { ITheme } from 'theme/types';

const useStyles = createUseStyles((theme: ITheme) => ({
  row: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: `0 -${theme.spacing.large}px`,
  },
}));

export default useStyles;
