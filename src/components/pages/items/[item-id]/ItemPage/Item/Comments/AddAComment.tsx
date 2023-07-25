import { GraphQLAddReview } from '@/src/types/GraphQL'
import { gql, useMutation } from '@apollo/client'
import { Button, Card, Group, Textarea } from '@mantine/core'
import { notifications } from '@mantine/notifications'
import { useEffect, useState } from 'react'
import { Check, MessageCircle } from 'tabler-icons-react'

// GraphQL mutation for adding a comment
const ADD_REVIEW_MUTATION = gql`
  mutation AddReview($productId: String!, $text: String!) {
    addReview(input: { item: { name: $productId }, text: $text }) {
      numUids
    }
  }
`

// Component definition
export const AddAComment = ({ productId }: { productId: string }) => {
  const [addReview, { data: addReviewData, loading: addReviewLoading }] =
    useMutation<GraphQLAddReview>(ADD_REVIEW_MUTATION)

  // State to track the comment text
  const [commentText, setCommentText] = useState('')

  // Function to handle adding a comment
  const handleComment = () => {
    addReview({ variables: { productId, text: commentText } })
    setCommentText('')
  }

  // useEffect to show a notification after adding a comment
  useEffect(() => {
    if (addReviewData && addReviewData.addReview.numUids === 1)
      notifications.show({
        color: 'green',
        icon: <Check />,
        title: 'Comment Added',
        message: 'Your comment has been successfully added.',
      })
  }, [addReviewData])

  // JSX return for the component
  return (
    <Card shadow="xs">
      <Textarea
        placeholder="Add a comment"
        value={commentText}
        onChange={(event) => setCommentText(event.currentTarget.value)}
      />
      <Group position="right" mt="xs">
        <Button
          leftIcon={<MessageCircle />}
          loading={addReviewLoading}
          onClick={handleComment}
        >
          {'Comment'}
        </Button>
      </Group>
    </Card>
  )
}
