import { Shell } from '@/src/components/layout/Shell'
import { GraphQLItem } from '@/src/types/GraphQL'
import { gql, useSubscription } from '@apollo/client'
import { Container } from '@mantine/core'
import { LoadedItem } from './Item'
import { LoadingItem } from './Item/Loading'

export const ItemPage = ({ itemId }: { itemId: string }) => {
  const { data, loading } = useSubscription<GraphQLItem>(gql`
    subscription GetItem {
      getItem(name: "${itemId}") {
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
          <LoadedItem
            name={data.getItem.name}
            description={data.getItem.description}
            img={data.getItem.img}
            price={data.getItem.price}
            reviews={data.getItem.reviews}
            itemId={itemId}
          />
        ) : (
          <LoadingItem />
        )}
      </Container>
    </Shell>
  )
}
