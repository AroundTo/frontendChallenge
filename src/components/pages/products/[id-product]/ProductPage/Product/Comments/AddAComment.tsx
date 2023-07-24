import { gql, useMutation } from '@apollo/client'
import { Button, Card, Group, Textarea } from '@mantine/core'
import { useState } from 'react'

export const AddAComment = ({ productId }: { productId: string }) => {
  const [addReview, { data, loading }] = useMutation<any>(gql`
    mutation AddReview($productId: String!, $text: String!) {
      addReview(input: { item: { name: $productId }, text: $text }) {
        numUids
      }
    }
  `)

  const [commentText, setCommentText] = useState('')
  const handleComment = () => {
    addReview({ variables: { productId, text: commentText } })
    setCommentText('')
  }

  return (
    <Card shadow="xs">
      <Textarea
        placeholder="Add a comment"
        value={commentText}
        onChange={(event) => setCommentText(event.currentTarget.value)}
      />
      <Group position="right" mt="xs">
        <Button onClick={handleComment}>{'Comment'}</Button>
      </Group>
    </Card>
  )
}
