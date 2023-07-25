import { gql, useMutation } from '@apollo/client'
import { ActionIcon, Flex, Text, useMantineTheme } from '@mantine/core'
import { modals } from '@mantine/modals'
import { notifications } from '@mantine/notifications'
import { Dispatch, SetStateAction, useEffect } from 'react'
import { Edit, Trash, TrashX } from 'tabler-icons-react'

// GraphQL mutation for deleting a review
const DELETE_REVIEW_MUTATION = gql`
  mutation DeleteReview($id: [ID!]!) {
    deleteReview(filter: { id: $id }) {
      msg
      numUids
    }
  }
`

// Component definition
export const IsNotEditing = ({
  text,
  setIsEditing,
  id,
}: {
  text: string
  setIsEditing: Dispatch<SetStateAction<boolean>>
  id: string
}) => {
  const theme = useMantineTheme()

  // GraphQL mutation for deleting a review
  const [
    deleteReview,
    { data: deleteReviewData, loading: deleteReviewIsLoading },
  ] = useMutation(DELETE_REVIEW_MUTATION)

  // Function to open the confirm delete modal
  const openConfirmDeleteModal = () =>
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

  // JSX return for the component
  return (
    <Flex>
      <Text w="100%">{text}</Text>
      <Flex justify="end">
        <ActionIcon onClick={() => setIsEditing(true)}>
          <Edit size="1.125rem" />
        </ActionIcon>
        <ActionIcon onClick={() => openConfirmDeleteModal()}>
          <Trash color={theme.colors.red[6]} size="1.125rem" />
        </ActionIcon>
      </Flex>
    </Flex>
  )
}
