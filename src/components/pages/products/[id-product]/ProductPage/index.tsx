import { Shell } from '@/src/components/layout/Shell'
import { GraphQLProduct } from '@/src/types/API'
import { gql, useQuery } from '@apollo/client'
import { Container, Image, Text, Title } from '@mantine/core'

export const ProductPage = ({ productId }: { productId: string }) => {
  const { data, loading } = useQuery<GraphQLProduct>(gql`
    query GetItem {
      getItem(name: "${productId}") {
        name
        img
        price
        description
      }
    }
  `)

  if (loading) return <div>{'Loading...'}</div>
  if (!data || !data.getItem) return <div>{"Product doesn't exist :("}</div>
  return (
    <Shell>
      <Container>
        <Title>{data.getItem.name}</Title>
        <Image src={data.getItem.img} />
        <Text>{data.getItem.description}</Text>
      </Container>
    </Shell>
  )
}
