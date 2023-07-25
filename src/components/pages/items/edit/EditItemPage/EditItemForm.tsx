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
  price: string
  description: string
}

interface EditItemFormProps {
  initialValues: FormValues
}

export const EditItemForm = ({ initialValues }: EditItemFormProps) => {
  const form = useForm<FormValues>({
    initialValues,
    validate: (values) => {
      const errors: Partial<FormValues> = {}
      if (!values.name) errors.name = 'Name is required'
      if (!values.img) errors.img = 'Image URL is required'
      else if (!/^https?:\/\/\S+\.(jpg|jpeg|png|gif)$/i.test(values.img))
        errors.img = 'Invalid image URL format'

      if (!values.price) errors.price = 'Price is required'
      if (!values.description) errors.description = 'Description is required'
      return errors
    },
  })

  const [updateItem, { data: updateItemData, loading }] =
    useMutation<GraphQLEditItem>(UPDATE_ITEM_MUTATION)

  const router = useRouter()
  const handleSubmit = (values: FormValues) => {
    updateItem({
      variables: {
        filter: { name: { eq: initialValues.name } },
        set: {
          img: values.img,
          price: parseFloat(values.price),
          description: values.description,
        },
      },
    }).catch((error) => {
      notifications.show({
        color: 'red',
        title: 'Update Item Failed',
        message: error.message,
      })
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
      router.push(`${APP_URLS.PRODUCTS}/${initialValues.name}`)
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
          value={parseFloat(form.values.price)} // Convert "price" to a number
        />

        <Textarea
          mt="md"
          withAsterisk
          label="Description"
          placeholder="Item Description"
          {...form.getInputProps('description')}
        />

        <Group position="right" mt="md">
          <Button leftIcon={<Edit />} type="submit" loading={loading}>
            {'Save'}
          </Button>
        </Group>
      </form>
    </Box>
  )
}
