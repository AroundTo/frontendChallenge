import { GraphQLUpdateReview } from '@/src/types/GraphQL'
import { gql, useMutation } from '@apollo/client'
import { Button, Text } from '@mantine/core'
import { modals } from '@mantine/modals'
import { notifications } from '@mantine/notifications'
import { Dispatch, SetStateAction, useEffect } from 'react'
import { Check, Edit } from 'tabler-icons-react'

// GraphQL mutation for editing a review
const EDIT_REVIEW_MUTATION = gql`
  mutation EditReview($id: ID!, $text: String!) {
    updateReview(input: { filter: { id: [$id] }, set: { text: $text } }) {
      numUids
    }
  }
`
export const EditReviewButton = ({
  reviewText,
  id,
  setIsEditing,
}: {
  setIsEditing: Dispatch<SetStateAction<boolean>>
  reviewText: string
  id: string
}) => {
  // GraphQL mutation for editing a review
  const [editReview, { data: editReviewData, loading: editReviewLoading }] =
    useMutation<GraphQLUpdateReview>(EDIT_REVIEW_MUTATION)

  // Function to open the confirm edit modal
  const openConfirmEditReviewModal = () =>
    modals.openConfirmModal({
      title: 'Confirm edit',
      children: (
        <Text size="sm">
          {
            'Are you sure you want to edit this review? Any changes made will overwrite the current content.'
          }
        </Text>
      ),
      labels: { confirm: 'Edit', cancel: 'Cancel' },
      onCancel: () => console.log('Cancel'),
      onConfirm: async () => {
        editReview({ variables: { id, text: reviewText } })
      },
    })

  // useEffect to handle notifications after editing a review
  useEffect(() => {
    if (editReviewData)
      if (editReviewData.updateReview.numUids === 1) {
        // If numUids is 1, show successful edit notification
        notifications.show({
          icon: <Check />,
          color: 'green',
          title: 'Edit Successful',
          message: 'Your review has been successfully edited.',
        })
        setIsEditing(false)
      } else if (editReviewData.updateReview.numUids === 0) {
        // If numUids is 0, show edit failed notification
        notifications.show({
          icon: <Edit />,
          color: 'red',
          title: 'Edit Failed',
          message: 'Failed to edit the review.',
        })
      }
  }, [editReviewData, setIsEditing])

  return (
    <Button
      leftIcon={<Edit />}
      loading={editReviewLoading}
      onClick={openConfirmEditReviewModal}
    >
      {'Edit'}
    </Button>
  )
}
