import React, { ReactElement } from 'react';
import { useTheme } from 'react-jss';
import useStyles from './Container.styles';

interface IContainer {
  children: ReactElement;
}

const Container = ({ children }: IContainer) => {
  const theme = useTheme();
  const classes = useStyles({ theme });

  return <div className={classes.container}>{children}</div>;
};

export default Container;
