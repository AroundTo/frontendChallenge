import { getMainDefinition } from '@apollo/client/utilities'
import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  split,
} from '@apollo/client'
import { WebSocketLink } from '@apollo/client/link/ws'
import { SubscriptionClient } from 'subscriptions-transport-ws'

import { gql } from './generated/gql'

const httpLink = createHttpLink({ uri: process.env.REACT_APP_GRAPHQL_API })
const wsLink = new WebSocketLink(
  new SubscriptionClient(process.env.REACT_APP_GRAPHQL_API_WSS || '')
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

export const apolloClient = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
})

export const itemsQuery = gql(`
  query GetItems {
    queryItem {
      img
      name
      price
      reviewsAggregate{
        count
      }
    }
  }
`)

export const itemByNameSubscription = gql(`
  subscription GetItem($name: String!){
    getItem(name: $name){
      name
      img
      price
      description
      reviews{
        id
        text
      }
    }
  }
`)

export const reviewsSubscription = gql(`
  subscription GetReviews {
    queryReview {
      id
      text
      item{
        name
        img
        description
      }
    }
  }
`)

export const createReviewMutation = gql(`
  mutation CreateReview($input: [AddReviewInput!]!) {
    addReview(input: $input) {
      review{
        id
        text
      }
    }
  }
`)
