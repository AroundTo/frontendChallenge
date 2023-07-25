import { Review } from '@/src/types/Items'
import { Box, Text, Title } from '@mantine/core'
import { AddAReview } from './AddAReview'
import { ReviewBox } from './ReviewBox'

export const ItemReviews = ({
  reviews,
  itemId,
}: {
  reviews: Review[]
  itemId: string
}) => {
  return (
    <Box>
      <Title my="lg" order={1}>
        {`Reviews`}
        <Text component="span" ml={8} size="lg">{`(${reviews.length})`}</Text>
      </Title>
      <AddAReview itemId={itemId} />
      {[...reviews].reverse().map(({ text, id }, index) => (
        <ReviewBox id={id} key={`review-${id}`} text={text} index={index} />
      ))}
    </Box>
  )
}
