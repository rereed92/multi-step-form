import React from 'react';
import { Header, Footer } from 'components';
import Routes from 'routes';
import { useTheme } from 'react-jss';
import useStyles from './App.styles';

const App = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });

  return (
    <>
      <Header />
      <main className={classes.content} data-testid="content">
        <Routes />
      </main>
      <Footer />
    </>
  );
};

export default App;
