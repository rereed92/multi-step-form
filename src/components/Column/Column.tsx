import React, { ReactElement } from 'react';
import { useTheme } from 'react-jss';
import useStyles from './Column.styles';

export type ColumnWidth = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export interface IColumnProps {
  children: ReactElement | ReactElement[];
  xs: ColumnWidth;
  md?: ColumnWidth;
  lg?: ColumnWidth;
}

const Column = ({ children, xs, md, lg }: IColumnProps) => {
  const theme = useTheme();
  const classes = useStyles({ ...{ xs, md, lg }, theme });

  return (
    <div className={classes.column} data-testid="column">
      {children}
    </div>
  );
};

export default Column;
