import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'

import { gql } from './generated/gql'

const httpLink = createHttpLink({ uri: process.env.REACT_APP_GRAPHQL_API })

export const apolloClient = new ApolloClient({
  link: httpLink,
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

export const itemByNameQuery = gql(`
  query GetItem($name: String!){
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
