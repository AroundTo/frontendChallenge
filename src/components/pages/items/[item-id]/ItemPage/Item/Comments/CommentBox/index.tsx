import { Card } from '@mantine/core'
import { useState } from 'react'
import { IsEditing } from './IsEditing'
import { IsNotEditing } from './IsNotEditing'

export const CommentBox = ({
  text,
  index,
  id,
}: {
  text: string
  index: number
  id: string
}) => {
  const [isEditing, setIsEditing] = useState(false)

  return (
    <Card my="xl" key={`comment-${index}`} shadow="xs">
      {isEditing ? (
        <IsEditing id={id} text={text} setIsEditing={setIsEditing} />
      ) : (
        <IsNotEditing id={id} text={text} setIsEditing={setIsEditing} />
      )}
    </Card>
  )
}
