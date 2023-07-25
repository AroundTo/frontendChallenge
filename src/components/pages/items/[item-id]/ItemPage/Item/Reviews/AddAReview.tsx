import { GraphQLAddReview } from '@/src/types/GraphQL'
import { gql, useMutation } from '@apollo/client'
import { Button, Card, Group, Textarea } from '@mantine/core'
import { notifications } from '@mantine/notifications'
import { useEffect, useState } from 'react'
import { Check, MessageCircle } from 'tabler-icons-react'

// GraphQL mutation for adding a review
const ADD_REVIEW_MUTATION = gql`
  mutation AddReview($itemId: String!, $text: String!) {
    addReview(input: { item: { name: $itemId }, text: $text }) {
      numUids
    }
  }
`

// Component definition
export const AddAReview = ({ itemId }: { itemId: string }) => {
  const [addReview, { data: addReviewData, loading: addReviewLoading }] =
    useMutation<GraphQLAddReview>(ADD_REVIEW_MUTATION)

  // State to track the review text
  const [reviewText, setReviewText] = useState('')

  // Function to handle adding a review
  const handleReview = () => {
    addReview({ variables: { itemId, text: reviewText } })
    setReviewText('')
  }

  // useEffect to show a notification after adding a review
  useEffect(() => {
    if (addReviewData && addReviewData.addReview.numUids === 1)
      notifications.show({
        color: 'green',
        icon: <Check />,
        title: 'Review Added',
        message: 'Your review has been successfully added.',
      })
  }, [addReviewData])

  // JSX return for the component
  return (
    <Card shadow="xs">
      <Textarea
        placeholder="Add a review"
        value={reviewText}
        onChange={(event) => setReviewText(event.currentTarget.value)}
      />
      <Group position="right" mt="xs">
        <Button
          leftIcon={<MessageCircle />}
          loading={addReviewLoading}
          onClick={handleReview}
        >
          {'Add review'}
        </Button>
      </Group>
    </Card>
  )
}
