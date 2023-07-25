import { Shell } from '@/src/components/layout/Shell'
import { GraphQLProduct } from '@/src/types/GraphQL'
import { gql, useSubscription } from '@apollo/client'
import { Container } from '@mantine/core'
import { LoadedProduct } from './Product'
import { LoadingProduct } from './Product/Loading'

export const ProductPage = ({ productId }: { productId: string }) => {
  const { data, loading } = useSubscription<GraphQLProduct>(gql`
    subscription GetItem {
      getItem(name: "${productId}") {
        name
        img
        price
        description
        reviews {
          id
          text
        }
        reviewsAggregate {
          count
          textMin
          textMax
        }
      }
    }  `)

  return (
    <Shell title={data?.getItem.name || ''}>
      <Container mt={20} mb={50}>
        {!loading && data && data.getItem ? (
          <LoadedProduct
            name={data.getItem.name}
            description={data.getItem.description}
            img={data.getItem.img}
            price={data.getItem.price}
            reviews={data.getItem.reviews}
            productId={productId}
          />
        ) : (
          <LoadingProduct />
        )}
      </Container>
    </Shell>
  )
}
