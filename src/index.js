import React from "react";
import ReactDOM from "react-dom";
import { Normalize } from "styled-normalize";
import { ThemeProvider } from "styled-components";
import reportWebVitals from "./reportWebVitals";
import GlobalStyle from "./styled/GlobalStyle";
import theme from "./styled/theme.js";

import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Normalize />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
