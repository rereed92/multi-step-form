import React from 'react';
import { CheckIcon } from 'icons/icons';
import { useTheme } from 'react-jss';
import useStyles from './Confirmation.styles';

const Confirmation = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });

  return (
    <div className={classes.confirmation}>
      <span className={classes.icon}>
        <CheckIcon />
      </span>
      <p>
        Please verify your email address, you should have received an email from
        us already
      </p>
    </div>
  );
};

export default Confirmation;
