import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
  split,
} from '@apollo/client'
import { WebSocketLink } from '@apollo/client/link/ws'
import { getMainDefinition } from '@apollo/client/utilities'
import { MantineProvider } from '@mantine/core'
import { ModalsProvider } from '@mantine/modals'
import { Notifications } from '@mantine/notifications'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { SubscriptionClient } from 'subscriptions-transport-ws'

export default function App(props: AppProps) {
  const { Component, pageProps } = props

  const httpLink = createHttpLink({
    uri: process.env.NEXT_PUBLIC_GRAPHQL_LINK_HTTPS || '',
  })
  const wsLink = new WebSocketLink(
    new SubscriptionClient(process.env.NEXT_PUBLIC_GRAPHQL_LINK_WSS || '', {
      reconnect: true,
      timeout: 3000,
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

  const apolloClient = new ApolloClient({
    link: splitLink,
    cache: new InMemoryCache(),
  })

  return (
    <>
      <Head>
        <title>{'Around'}</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>
      <ApolloProvider client={apolloClient}>
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            colorScheme: 'light',
            primaryColor: 'pink',
          }}
        >
          <ModalsProvider>
            <Notifications />
            <Component {...pageProps} />
          </ModalsProvider>
        </MantineProvider>
      </ApolloProvider>
    </>
  )
}
