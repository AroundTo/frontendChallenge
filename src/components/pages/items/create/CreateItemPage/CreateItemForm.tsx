import { APP_URLS } from '@/src/constants/URLS'
import { GraphQLAddItem } from '@/src/types/GraphQL'
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
import { Plus } from 'tabler-icons-react'

const ADD_ITEM_MUTATION = gql`
  mutation AddItem(
    $name: String!
    $img: String!
    $price: Float!
    $description: String!
  ) {
    addItem(
      input: {
        name: $name
        img: $img
        price: $price
        description: $description
      }
    ) {
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

export const CreateItemForm = () => {
  const form = useForm<FormValues>({
    initialValues: {
      name: '',
      img: '',
      price: '',
      description: '',
    },
    validate: (values) => {
      const errors: Partial<FormValues> = {}
      if (!values.name) errors.name = 'Name is required'
      if (!values.img) errors.img = 'Image URL is required'
      if (!values.price) errors.price = 'Price is required'
      if (!values.description) errors.description = 'Description is required'
      return errors
    },
  })

  const [addItem, { data: addItemData, loading }] =
    useMutation<GraphQLAddItem>(ADD_ITEM_MUTATION)

  const router = useRouter()
  const handleSubmit = (values: FormValues) => {
    addItem({
      variables: {
        name: values.name,
        img: values.img,
        price: parseFloat(values.price),
        description: values.description,
      },
    }).catch((error) => {
      notifications.show({
        color: 'red',
        title: 'Add Item Failed',
        message: error.message,
      })
    })
  }

  // useEffect to handle notifications after adding a new item
  useEffect(() => {
    if (addItemData && addItemData.addItem.numUids === 1) {
      // If numUids is 1, show successful add notification
      notifications.show({
        color: 'green',
        title: 'Item Added',
        message: 'Your item has been successfully added.',
      })
      router.push(`${APP_URLS.PRODUCTS}/${form.values.name}`)
    } else if (addItemData && addItemData.addItem.numUids === 0) {
      // If numUids is 0, show add failed notification
      notifications.show({
        color: 'red',
        title: 'Add Item Failed',
        message: 'Failed to add the item.',
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [addItemData])

  return (
    <Box m="xl">
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <TextInput
          withAsterisk
          label="Name"
          placeholder="Item Name"
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
          placeholder="Item Description"
          {...form.getInputProps('description')}
        />

        <Group position="right" mt="md">
          <Button leftIcon={<Plus />} type="submit" loading={loading}>
            {'Create'}
          </Button>
        </Group>
      </form>
    </Box>
  )
}
