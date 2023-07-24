import { Review } from '@/src/types/GraphQL'
import { Box, Card, Text, Title } from '@mantine/core'
import { AddAComment } from './AddAComment'

export const ProductComments = ({
  reviews,
  productId,
}: {
  reviews: Review[]
  productId: string
}) => {
  return (
    <Box>
      <Title order={2}>{'Comments'}</Title>
      {reviews.map(({ text }, index) => (
        <Card my="xl" key={`comment-${index}`} shadow="xs">
          <Text> {text}</Text>
        </Card>
      ))}
      <AddAComment productId={productId} />
    </Box>
  )
}
