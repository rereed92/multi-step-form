import React from "react";
import useStyles from "./App.styles";
import { useTheme } from 'react-jss'

const App = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });

  return <h1 className={classes.app}>Hello React Typescript!</h1>;
};

export default App;
