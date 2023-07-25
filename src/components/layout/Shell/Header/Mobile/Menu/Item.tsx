import { NavLink, Text } from '@mantine/core'
import Link from 'next/link'

export const HeaderLink = ({
  href,
  children,
  icon,
  newTab = false,
}: {
  href: string
  children: string
  icon: React.ReactNode
  newTab?: boolean
}) => {
  return (
    <NavLink
      icon={icon}
      href={href}
      component={Link}
      target={newTab ? '_blank' : undefined}
      label={<Text size="lg">{children}</Text>}
    />
  )
}
