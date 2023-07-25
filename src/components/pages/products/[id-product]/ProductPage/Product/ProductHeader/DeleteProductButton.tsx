import { useMantineTheme } from '@mantine/core'
import { Trash } from 'tabler-icons-react'

export const DeleteProductButton = () => {
  const theme = useMantineTheme()
  return <Trash color={theme.colors.red[6]} size="5rem" />
}
