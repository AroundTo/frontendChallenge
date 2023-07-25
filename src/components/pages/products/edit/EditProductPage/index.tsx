import { Shell } from '@/src/components/layout/Shell'
import { GraphQLProduct } from '@/src/types/GraphQL'
import { gql, useQuery } from '@apollo/client'
import { Container, Divider, Loader, Title } from '@mantine/core'
import { EditProductBreadcrums } from './Breadcrums'
import { EditProductForm } from './EditProductForm'

export const EditProductPage = ({ productId }: { productId: string }) => {
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
        <EditProductBreadcrums productId={data?.getItem.name || 'item'} />
        <Divider my={10} />
        <Title>{`Edit ${data?.getItem.name || 'item'}`}</Title>

        {!loading && data && data.getItem ? (
          <EditProductForm
            initialValues={{
              name: data.getItem.name,
              img: data.getItem.img,
              price: data.getItem.price,
              description: data.getItem.description,
            }}
          />
        ) : (
          <Loader />
        )}
      </Container>
    </Shell>
  )
}
