import { Shell } from '@/src/components/layout/Shell'
import { GraphQLProduct } from '@/src/types/GraphQL'
import { gql, useQuery } from '@apollo/client'
import { Container, Divider, Title } from '@mantine/core'
import { EditItemBreadcrums } from './Breadcrums'
import { EditItemForm } from './EditItemForm'
import { LoadingEditItemPage } from './Loading'

export const EditItemPage = ({ productId }: { productId: string }) => {
  const { data, loading } = useQuery<GraphQLProduct>(gql`
  query GetItem {
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
}
  `)

  return (
    <Shell title="Edit item">
      <Container mt={20}>
        {!loading && data && data.getItem ? (
          <>
            <EditItemBreadcrums productId={data?.getItem.name || 'item'} />
            <Divider my={10} />
            <Title>{`Edit ${data?.getItem.name || 'item'}`}</Title>
            <EditItemForm
              initialValues={{
                name: data.getItem.name,
                img: data.getItem.img,
                price: data.getItem.price,
                description: data.getItem.description,
              }}
            />
          </>
        ) : (
          <LoadingEditItemPage />
        )}
      </Container>
    </Shell>
  )
}
