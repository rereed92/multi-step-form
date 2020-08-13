import { createUseStyles } from 'react-jss';
import { ITheme } from 'theme/types';

const useStyles = createUseStyles((theme: ITheme) => ({
  row: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    margin: `0 -${theme.spacing.padding}px`,
  },
}));

export default useStyles;
