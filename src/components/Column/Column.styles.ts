import { createUseStyles } from 'react-jss';
import { ITheme } from 'theme/types';

export const col = (width: number, padding: number) => ({
  padding: `0 ${padding}px`,
  flexBasis: `${(width / 12) * 100}%`,
});

const useStyles = createUseStyles((theme: ITheme) => ({
  column: (props) => col(props.width, theme.spacing.padding),
}));

export default useStyles;
