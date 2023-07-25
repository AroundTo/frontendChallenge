import { GraphQLDeleteReview } from '@/src/types/Products'
import { gql, useMutation } from '@apollo/client'
import { ActionIcon, Loader, Text, useMantineTheme } from '@mantine/core'
import { modals } from '@mantine/modals'
import { notifications } from '@mantine/notifications'
import { useEffect } from 'react'
import { Trash, TrashX } from 'tabler-icons-react'

// GraphQL mutation for deleting a review
const DELETE_REVIEW_MUTATION = gql`
  mutation DeleteReview($id: [ID!]!) {
    deleteReview(filter: { id: $id }) {
      msg
      numUids
    }
  }
`

export const RemoveCommentButton = ({ id }: { id: string }) => {
  const theme = useMantineTheme()

  // GraphQL mutation for deleting a review
  const [
    deleteReview,
    { data: deleteReviewData, loading: deleteReviewIsLoading },
  ] = useMutation<GraphQLDeleteReview>(DELETE_REVIEW_MUTATION)

  // Function to open the confirm delete modal
  const openConfirmDeleteCommentModal = () =>
    modals.openConfirmModal({
      title: 'Confirm Delete',
      children: (
        <Text size="sm">
          {
            'Are you sure you want to delete this comment? This action cannot be undone.'
          }
        </Text>
      ),
      confirmProps: { color: 'red' },
      labels: { confirm: 'Yes', cancel: 'No' },
      onCancel: () => console.log('Cancel'),
      onConfirm: () => deleteReview({ variables: { id } }),
    })

  // useEffect to handle notifications after deleting a review
  useEffect(() => {
    if (deleteReviewData)
      if (deleteReviewData.deleteReview.numUids === 1)
        // If numUids is 1, show successful deletion notification
        notifications.show({
          icon: <Trash />,
          color: 'green',
          title: 'Deletion Successful',
          message: deleteReviewData.deleteReview.msg,
        })
      // If numUids is 0, show deletion failed notification
      else if (deleteReviewData.deleteReview.numUids === 0)
        notifications.show({
          color: 'red',
          icon: <TrashX />,
          title: 'Deletion failed',
          message: deleteReviewData.deleteReview.msg,
        })
  }, [deleteReviewData])

  return (
    <ActionIcon onClick={() => openConfirmDeleteCommentModal()}>
      {deleteReviewIsLoading ? (
        <Loader size="1.125rem" />
      ) : (
        <Trash color={theme.colors.red[6]} size="1.125rem" />
      )}
    </ActionIcon>
  )
}
