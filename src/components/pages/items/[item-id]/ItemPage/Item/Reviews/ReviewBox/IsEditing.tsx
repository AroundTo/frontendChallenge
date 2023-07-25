import { Button, Group, Textarea } from '@mantine/core'
import { Dispatch, SetStateAction, useState } from 'react'
import { EditReviewButton } from './EditReviewButton'

// Component definition for editing a review
export const IsEditing = ({
  text,
  setIsEditing,
  id,
}: {
  text: string
  setIsEditing: Dispatch<SetStateAction<boolean>>
  id: string
}) => {
  const [reviewText, setReviewText] = useState(text)

  return (
    <>
      <Textarea
        placeholder={text}
        value={reviewText}
        onChange={(event) => setReviewText(event.currentTarget.value)}
      />
      <Group position="right" mt="xs">
        <Button variant="outline" onClick={() => setIsEditing(false)}>
          {'Cancel'}
        </Button>
        <EditReviewButton
          setIsEditing={setIsEditing}
          id={id}
          reviewText={reviewText}
        />
      </Group>
    </>
  )
}
