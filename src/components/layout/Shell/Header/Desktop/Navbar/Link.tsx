import { Anchor, Text, useMantineTheme } from '@mantine/core'
import Link from 'next/link'

export const HeaderLink = ({
  href,
  children,
  newTab = false,
}: {
  href: string
  children: string
  newTab?: boolean
}) => {
  const theme = useMantineTheme()

  return (
    <Anchor
      sx={{
        '&:hover': {
          transition: '200ms',
          color: theme.colors.red[6],
        },
      }}
      color="black"
      component={Link}
      href={href}
      mx="xs"
      target={newTab ? '_blank' : undefined}
    >
      <Text size="lg">{children}</Text>
    </Anchor>
  )
}
