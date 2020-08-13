import { createUseStyles } from 'react-jss';
import { ITheme } from 'theme/types';
import { IColumnProps } from './Column';

export const col = (width: number, padding: number) => ({
  padding: `0 ${padding}px`,
  flexBasis: `${(width / 12) * 100}%`,
});

const useStyles = createUseStyles((theme: ITheme) => ({
  column: (props) => col(props.xs, theme.spacing.padding),

  [`@media (min-width: ${theme.breakpoints.md}px)`]: {
    column: (props: IColumnProps) => col(props.md, theme.spacing.padding),
  },

  [`@media (min-width: ${theme.breakpoints.lg}px)`]: {
    column: (props: IColumnProps) => col(props.lg, theme.spacing.padding),
  },
}));

export default useStyles;
