import React from 'react';
import ReactDOM from 'react-dom';
import App from 'contents/App';
import reportWebVitals from 'apps/vitals/reportWebVitals';
import { StylesProvider, ThemeProvider } from '@material-ui/core/styles';
import { ApolloProvider } from "@apollo/client";

import { theme } from 'apps/theme'
import { graphqlClient } from 'apps/graphql';

import 'styles';

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
