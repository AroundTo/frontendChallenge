import { Button, Card, Group, Textarea } from '@mantine/core'
import { Dispatch, SetStateAction, useState } from 'react'
import { EditCommentButton } from './EditCommentButton'

// Component definition for editing a comment
export const IsEditing = ({
  text,
  setIsEditing,
  id,
}: {
  text: string
  setIsEditing: Dispatch<SetStateAction<boolean>>
  id: string
}) => {
  const [commentText, setCommentText] = useState(text)

  return (
    <Card shadow="xs">
      <Textarea
        placeholder={text}
        value={commentText}
        onChange={(event) => setCommentText(event.currentTarget.value)}
      />
      <Group position="right" mt="xs">
        <Button variant="outline" onClick={() => setIsEditing(false)}>
          {'Cancel'}
        </Button>
        <EditCommentButton
          setIsEditing={setIsEditing}
          id={id}
          commentText={commentText}
        />
      </Group>
    </Card>
  )
}
