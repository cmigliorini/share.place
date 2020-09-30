import './App.css';
import { cache } from './cache';

import { ApolloClient, HttpLink, NormalizedCacheObject } from '@apollo/client';
import { typeDefs } from'./pages/login';

export const App: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache,
  link: new HttpLink({
    uri: 'https://app.graphql.share.place/',
    headers: {
      authorization: "Bearer " + (localStorage.getItem('token') || ''),
      // 'client-name': 'Languages Explorer [web]',
      // 'client-version': '1.0.0',
    },
  }),
  typeDefs,
  resolvers: {},
});
