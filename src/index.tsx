import * as React from "react";
import * as ReactDOM from "react-dom";
import { App } from "components";
import { ThemeProvider } from "react-jss";
import themes from "theme/themes";

const Index = () => {
  return <App />;
};

ReactDOM.render(
<ThemeProvider theme={themes.primary}><Index /></ThemeProvider>, document.getElementById("root"));
