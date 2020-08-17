import React from 'react';
import { useTheme } from 'react-jss';
import useStyles from './Heading.styles';

export interface IHeadingProps {
  children: string;
  size: 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
}

const Heading = ({ children, size }: IHeadingProps) => {
  const theme = useTheme();
  const classes = useStyles({ ...{ size }, theme });

  const Size = size;

  return (
    <Size className={classes.heading} data-testid={`heading-${size}`}>
      {children}
    </Size>
  );
};

export default Heading;
