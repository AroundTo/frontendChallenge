import { gql, useQuery } from '@apollo/client'
import { Grid } from '@mantine/core'
import { ProductCard } from './ProductCard'

export const ProductsContainer = () => {
  const { data, loading } = useQuery<any>(gql`
    query QueryItem {
      queryItem {
        name
        img
        price
        description
      }
    }
  `)

  if (loading) return <div>{'Loading...'}</div>
  if (!data || !data.queryItem) return <div>{'No data :('}</div>

  return (
    <>
      <Grid>
        {data.queryItem.map((item, index) => (
          <Grid.Col md={3} xs={12} key={`item-${index}`}>
            <ProductCard product={item} />
          </Grid.Col>
        ))}
      </Grid>
    </>
  )
}
