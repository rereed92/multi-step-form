import React, { ReactElement } from 'react';
import { useTheme } from 'react-jss';
import useStyles from './Container.styles';

interface IContainerProps {
  children: ReactElement | ReactElement[];
}

const Container = ({ children }: IContainerProps) => {
  const theme = useTheme();
  const classes = useStyles({ theme });

  return (
    <div className={classes.container} data-testid="container">
      {children}
    </div>
  );
};

export default Container;
