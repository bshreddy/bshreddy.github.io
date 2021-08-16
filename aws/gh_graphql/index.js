const apollo = require("@apollo/client/core");
const link = require("@apollo/client/link/http");
const context = require("@apollo/client/link/context");
const fetch = require('cross-fetch');
const { readFileSync } = require('fs')

const httpLink = link.createHttpLink({
  uri: process.env.GRAPHQL_URL,
  fetch
});

const authLink = context.setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    }
  }
});

const client = new apollo.ApolloClient({
  link: authLink.concat(httpLink),
  cache: new apollo.InMemoryCache()
});

const githubReposQuery = apollo.gql(readFileSync('./gh_graphql/projects.graphql').toString('utf-8'));

module.exports = {
  client,
  githubReposQuery
}
