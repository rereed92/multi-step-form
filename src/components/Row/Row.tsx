import React, { ReactElement } from 'react';
import { useTheme } from 'react-jss';
import useStyles from './Row.styles';

interface IRowProps {
  children: ReactElement[];
}

const Row = ({ children }: IRowProps) => {
  const theme = useTheme();
  const classes = useStyles({ theme });

  return <div className={classes.row}>{children}</div>;
};

export default Row;
