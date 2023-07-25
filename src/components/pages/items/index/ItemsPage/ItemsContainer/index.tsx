import { GraphQLItems } from '@/src/types/GraphQL'
import { gql, useQuery } from '@apollo/client'
import { Grid } from '@mantine/core'
import { ItemCard } from './Card'

export const ItemsContainer = () => {
  const { data, loading } = useQuery<GraphQLItems>(gql`
    query QueryItem {
      queryItem {
        name
        img
        price
        description
      }
    }
  `)

  return (
    <>
      <Grid p="xl">
        {!loading && data && data.queryItem ? (
          <>
            {data.queryItem.map((item, index) => (
              <Grid.Col md={3} xs={12} key={`item-${index}`}>
                <ItemCard product={item} />
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
