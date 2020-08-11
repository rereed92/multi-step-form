import React from 'react';
import { App } from 'containers';
import { ThemeProvider } from 'react-jss';
import themes from 'theme/themes';
import { Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import history from 'routes/history';

ReactDOM.render(
  <ThemeProvider theme={themes.primary}>
    <Router history={history}>
      <App />
    </Router>
  </ThemeProvider>,
  document.getElementById('root')
);
