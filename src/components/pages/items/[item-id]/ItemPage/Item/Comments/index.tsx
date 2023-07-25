import { Review } from '@/src/types/Items'
import { Box, Title } from '@mantine/core'
import { AddAComment } from './AddAComment'
import { CommentBox } from './CommentBox'

export const ItemComments = ({
  reviews,
  itemId,
}: {
  reviews: Review[]
  itemId: string
}) => {
  return (
    <Box>
      <Title my="lg" order={1}>
        {'Comments'}
      </Title>
      <AddAComment itemId={itemId} />
      {[...reviews].reverse().map(({ text, id }, index) => (
        <CommentBox id={id} key={`comment-${id}`} text={text} index={index} />
      ))}
    </Box>
  )
}
