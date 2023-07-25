import { ApolloClient, HttpLink, InMemoryCache, split } from '@apollo/client'
import { GraphQLWsLink } from '@apollo/client/link/subscriptions'
import { getMainDefinition } from '@apollo/client/utilities'
import { createClient } from 'graphql-ws'

export const getClient = () => {
  const httpLink = new HttpLink({
    uri: 'https://blue-surf-1040009.us-east-1.aws.cloud.dgraph.io/graphql',
  })

  const wsLink = new GraphQLWsLink(
    createClient({
      url: 'wss://blue-surf-1040009.us-east-1.aws.cloud.dgraph.io/graphql',
    })
  )

  const splitLink = split(
    ({ query }) => {
      const definition = getMainDefinition(query)
      return (
        definition.kind === 'OperationDefinition' &&
        definition.operation === 'subscription'
      )
    },
    wsLink,
    httpLink
  )

  const getclient = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
  })

  return getclient
}
