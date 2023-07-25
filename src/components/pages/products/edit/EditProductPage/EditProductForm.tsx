import { APP_URLS } from '@/src/constants/URLS'
import { GraphQLEditItem } from '@/src/types/GraphQL'
import { gql, useMutation } from '@apollo/client'
import {
  Box,
  Button,
  Group,
  NumberInput,
  TextInput,
  Textarea,
} from '@mantine/core'
import { useForm } from '@mantine/form'
import { notifications } from '@mantine/notifications'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { Edit } from 'tabler-icons-react'

const UPDATE_ITEM_MUTATION = gql`
  mutation UpdateItem($filter: ItemFilter!, $set: ItemPatch!) {
    updateItem(input: { filter: $filter, set: $set }) {
      numUids
    }
  }
`

type FormValues = {
  name: string
  img: string
  price: number
  description: string
}

interface EditProductFormProps {
  initialValues: FormValues
}

export const EditProductForm = ({ initialValues }: EditProductFormProps) => {
  const form = useForm<FormValues>({
    initialValues,
  })

  const [updateItem, { data: updateItemData, loading }] =
    useMutation<GraphQLEditItem>(UPDATE_ITEM_MUTATION)

  const router = useRouter()
  const handleSubmit = (values: FormValues) => {
    updateItem({
      variables: {
        filter: { name: { eq: values.name } },
        set: {
          img: values.img,
          price: values.price,
          description: values.description,
        },
      },
    }).catch((error) => {
      console.error('Error updating item:', error.message)
    })
  }

  // useEffect to handle notifications after updating the item
  useEffect(() => {
    if (updateItemData && updateItemData.updateItem.numUids === 1) {
      // If numUids is 1, show successful update notification
      notifications.show({
        color: 'green',
        title: 'Update Successful',
        message: 'Your item has been successfully updated.',
      })
      router.push(`${APP_URLS.PRODUCTS}/${form.values.name}`)
    } else if (updateItemData && updateItemData.updateItem.numUids === 0) {
      // If numUids is 0, show update failed notification
      notifications.show({
        color: 'red',
        title: 'Update Item Failed',
        message: 'Failed to update the item.',
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [updateItemData])

  return (
    <Box m="xl">
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <TextInput
          withAsterisk
          label="Name"
          placeholder="Product Name"
          {...form.getInputProps('name')}
        />

        <TextInput
          mt="md"
          withAsterisk
          label="Image URL"
          placeholder="https://example.com/image.jpg"
          {...form.getInputProps('img')}
        />

        <NumberInput
          mt="md"
          withAsterisk
          label="Price"
          placeholder="Enter the price"
          {...form.getInputProps('price')}
        />

        <Textarea
          mt="md"
          withAsterisk
          label="Description"
          placeholder="Product Description"
          {...form.getInputProps('description')}
        />

        <Group position="right" mt="md">
          <Button leftIcon={<Edit />} type="submit" loading={loading}>
            {'Edit'}
          </Button>
        </Group>
      </form>
    </Box>
  )
}
