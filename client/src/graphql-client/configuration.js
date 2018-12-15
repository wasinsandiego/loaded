import { ApolloClient } from 'apollo-client'
// import { ApolloLink } from 'apollo-link'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

const cache = new InMemoryCache()

const link = createHttpLink({
  uri: process.env.GRAPHQL_API || 'http://localhost:4000/graphql'
})

const client = new ApolloClient({
  link,
  cache,
  dataIdFromObject: object => object.id
})

export default client
