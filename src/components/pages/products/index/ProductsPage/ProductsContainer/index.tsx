import { GraphQLProducts } from '@/src/types/GraphQL'
import { gql, useQuery } from '@apollo/client'
import { Grid } from '@mantine/core'
import { ProductCard } from './Card'

export const ProductsContainer = () => {
  const { data, loading } = useQuery<GraphQLProducts>(gql`
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
                <ProductCard product={item} />
              </Grid.Col>
            ))}
          </>
        ) : (
          <>
            {[...Array(10)].map((item, index) => (
              <Grid.Col md={3} xs={12} key={`item-${index}`}>
                <ProductCard />
              </Grid.Col>
            ))}
          </>
        )}
      </Grid>
    </>
  )
}
