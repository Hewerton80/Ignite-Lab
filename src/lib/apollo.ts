import { ApolloClient, InMemoryCache } from '@apollo/client'

export const apolloClient = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o6wsxv0z2501z2ano2f4ps/master',
  cache: new InMemoryCache(),
})
