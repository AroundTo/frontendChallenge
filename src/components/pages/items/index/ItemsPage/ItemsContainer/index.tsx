import { GraphQLItems } from '@/src/types/GraphQL'
import { gql, useSubscription } from '@apollo/client'
import { Grid } from '@mantine/core'
import { ItemCard } from './Card'

export const ItemsContainer = () => {
  const { data, loading } = useSubscription<GraphQLItems>(gql`
    subscription QueryItem {
      queryItem {
        name
        img
        price
        description
        reviews {
          id
          text
        }
      }
    }
  `)
  return (
    <>
      <Grid p="xl" my={30}>
        {!loading && data && data.queryItem ? (
          <>
            {data.queryItem.map((item, index) => (
              <Grid.Col md={3} xs={12} key={`item-${index}`}>
                <ItemCard item={item} />
              </Grid.Col>
            ))}
          </>
        ) : (
          <>
            {[...Array(10)].map((item, index) => (
              <Grid.Col md={3} xs={12} key={`item-${index}`}>
                <ItemCard />
              </Grid.Col>
            ))}
          </>
        )}
      </Grid>
    </>
  )
}
