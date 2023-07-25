import { Card } from '@mantine/core'
import { useState } from 'react'
import { IsEditing } from './IsEditing'
import { IsNotEditing } from './IsNotEditing'

export const ReviewBox = ({
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
    <Card my="xl" key={`review-${index}`} shadow="xs">
      {isEditing ? (
        <IsEditing id={id} text={text} setIsEditing={setIsEditing} />
      ) : (
        <IsNotEditing id={id} text={text} setIsEditing={setIsEditing} />
      )}
    </Card>
  )
}
