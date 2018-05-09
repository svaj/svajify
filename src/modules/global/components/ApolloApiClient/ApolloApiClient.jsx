import React from 'react';
import PropTypes from 'prop-types';
import { ApolloClient } from 'apollo-client';
import { withClientState } from 'apollo-link-state';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';
import { resolvers } from 'resolvers';

const cache = new InMemoryCache({
  addTypename: false,
  dataIdFromObject: object => object.id
});

const stateLink = withClientState({
  cache,
  resolvers
});

const client = new ApolloClient({
  link: stateLink,
  cache
});

export const ApolloApiClient = props => {
  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
};

ApolloApiClient.displayName = 'ApolloApiClient';
ApolloApiClient.propTypes = {
  children: PropTypes.node.isRequired
};

export default ApolloApiClient;
