import React from 'react';
import { App } from 'containers';
import { ThemeProvider } from 'react-jss';
import themes from 'theme/themes';
import { Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import history from 'routes/history';
import { Provider } from 'react-redux';
import store from 'store';

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={themes.primary}>
      <Router history={history}>
        <App />
      </Router>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);
