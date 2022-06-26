import { ApolloClient, InMemoryCache } from '@apollo/client'

export const apolloClient = new ApolloClient({
  uri: import.meta.env.VITE_API_GRAPHQL_URL,
  headers: {
    Authotization: `Bearer ${import.meta.env.VITE_API_GRAPHQL_TOKEN}`,
  },
  cache: new InMemoryCache(),
})
