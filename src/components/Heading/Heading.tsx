import React from 'react';
import { useTheme } from 'react-jss';
import useStyles from './Heading.styles';

export type HeadingSize = 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
export interface IHeadingProps {
  children: string;
  size: HeadingSize;
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
