import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './vitals/reportWebVitals';
import { StylesProvider, ThemeProvider } from '@material-ui/core/styles';
import { theme } from './theme';

import './styles/index.scss';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <StylesProvider injectFirst>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </StylesProvider>
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
