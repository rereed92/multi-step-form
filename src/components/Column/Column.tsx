import React, { ReactElement } from 'react';
import { useTheme } from 'react-jss';
import useStyles from './Column.styles';

interface IColumnProps {
  children: ReactElement | ReactElement[];
  width: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
}

const Column = ({ children, width }: IColumnProps) => {
  const theme = useTheme();
  const classes = useStyles({ ...{ width }, theme });

  return <div className={classes.column}>{children}</div>;
};

export default Column;
