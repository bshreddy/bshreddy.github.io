import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import reportWebVitals from './vitals/reportWebVitals';
import { StylesProvider, ThemeProvider } from '@material-ui/core/styles';
import { ApolloProvider } from "@apollo/client";

import { theme } from '../theme';
import { graphqlClient } from './graphql';

import './styles/index.scss';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <StylesProvider injectFirst>
      <ApolloProvider client={graphqlClient}>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ApolloProvider>
    </StylesProvider>
  </ThemeProvider>,
  document.getElementById('root')
);

reportWebVitals(console.log);
