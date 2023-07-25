import { Review } from '@/src/types/Items'
import { Box, Title } from '@mantine/core'
import { AddAComment } from './AddAComment'
import { CommentBox } from './CommentBox'

export const ItemComments = ({
  reviews,
  productId,
}: {
  reviews: Review[]
  productId: string
}) => {
  return (
    <Box>
      <Title my="lg" order={1}>
        {'Comments'}
      </Title>
      <AddAComment productId={productId} />
      {[...reviews].reverse().map(({ text, id }, index) => (
        <CommentBox id={id} key={`comment-${id}`} text={text} index={index} />
      ))}
    </Box>
  )
}
