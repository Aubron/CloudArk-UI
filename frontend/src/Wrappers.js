import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';

const theme = createMuiTheme();

const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_URL
})

const Wrappers = ({children}) => {
  return (
    <ApolloProvider client={client}>
      <MuiThemeProvider theme={theme}>
        {children}
      </MuiThemeProvider>
    </ApolloProvider>
  )
}

export default Wrappers