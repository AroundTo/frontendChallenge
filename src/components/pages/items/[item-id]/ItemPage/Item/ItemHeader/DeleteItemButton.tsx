import { APP_URLS } from '@/src/constants/URLS'
import { GraphQLDeleteItem } from '@/src/types/GraphQL'
import { gql, useMutation } from '@apollo/client'
import { ActionIcon, Loader, Text, useMantineTheme } from '@mantine/core'
import { modals } from '@mantine/modals'
import { notifications } from '@mantine/notifications'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { Trash, TrashX } from 'tabler-icons-react'

const DELETE_ITEM_MUTATION = gql`
  mutation DeleteItem($name: String!) {
    deleteItem(filter: { name: { eq: $name } }) {
      msg
      numUids
    }
  }
`

export const DeleteItemButton = ({ name }: { name: string }) => {
  const theme = useMantineTheme()

  // GraphQL mutation for deleting an item
  const [deleteItem, { data: deleteItemData, loading: deleteItemIsLoading }] =
    useMutation<GraphQLDeleteItem>(DELETE_ITEM_MUTATION)

  const router = useRouter()

  // Function to open the confirm delete modal
  const openConfirmDeleteProductModal = () =>
    modals.openConfirmModal({
      title: 'Confirm Delete',
      children: (
        <Text size="sm">
          {
            'Are you sure you want to delete this item? This action cannot be undone.'
          }
        </Text>
      ),
      confirmProps: { color: 'red' },
      labels: { confirm: 'Yes', cancel: 'No' },
      onCancel: () => console.log('Cancel'),
      onConfirm: async () => {
        try {
          deleteItem({ variables: { name } })
        } catch (error) {
          notifications.show({
            color: 'red',
            icon: <TrashX />,
            title: 'Deletion Failed',
            message: 'Failed to delete the item.',
          })
        }
      },
    })

  // useEffect to handle notifications after deleting an item
  useEffect(() => {
    if (deleteItemData)
      if (deleteItemData.deleteItem.numUids === 1) {
        // If numUids is 1, show successful deletion notification
        notifications.show({
          icon: <Trash />,
          color: 'green',
          title: 'Deletion Successful',
          message: deleteItemData.deleteItem.msg,
        })
        router.push(`${APP_URLS.PRODUCTS}`)
      } else if (deleteItemData.deleteItem.numUids === 0) {
        // If numUids is 0, show deletion failed notification
        notifications.show({
          color: 'red',
          icon: <TrashX />,
          title: 'Deletion failed',
          message: deleteItemData.deleteItem.msg,
        })
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deleteItemData])

  // JSX return for the DeleteProductButton component
  return (
    <ActionIcon onClick={() => openConfirmDeleteProductModal()}>
      {deleteItemIsLoading ? (
        <Loader size="1.125rem" />
      ) : (
        <Trash color={theme.colors.red[6]} size="1.125rem" />
      )}
    </ActionIcon>
  )
}
