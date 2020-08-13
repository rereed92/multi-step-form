import React from 'react';
import { App } from 'containers';
import { ThemeProvider, jss } from 'react-jss';
import { Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import history from 'routes/history';
import { Provider } from 'react-redux';
import store from 'store';
import normalize from 'normalize-jss';
import themes from 'theme/themes';
import plugins from 'styles/plugins';
import globalStyles from 'styles/global';

jss.createStyleSheet(normalize).attach();
jss.createStyleSheet(globalStyles).attach();
jss.use(plugins);

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
