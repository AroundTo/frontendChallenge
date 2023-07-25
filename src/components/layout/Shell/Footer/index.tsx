import { AppIcon } from '@/src/components/svgs/AppIcon'
import { Signature } from '@/src/components/svgs/Signature'
import {
  Anchor,
  Flex,
  Footer as MatineFooter,
  Text,
  useMantineTheme,
} from '@mantine/core'
import Link from 'next/link'

export const Footer = () => {
  const theme = useMantineTheme()
  return (
    <MatineFooter p="lg" px={50} bg="gray.2" withBorder={false} height="auto">
      <Flex
        align="center"
        justify="space-between"
        sx={{
          [theme.fn.smallerThan('md')]: {
            flexDirection: 'column',
            gap: 30,
          },
        }}
      >
        <Flex direction="column">
          <Anchor
            size="sm"
            component={Link}
            href="https://github.com/AroundTo/frontendChallenge"
            color={theme.colors.gray[6]}
            align="center"
            target="_blank"
          >
            <Flex direction="column" gap={4}>
              <AppIcon color={theme.colors.gray[6]} svgProps={{ height: 25 }} />
              <Text>{'Around Front End Challenge'}</Text>
            </Flex>
          </Anchor>
        </Flex>
        <Anchor
          target="_blank"
          href="https://www.julian-medina.dev/"
          component={Link}
        >
          <Signature svgProps={{ height: 40 }} color={theme.colors.gray[6]} />
        </Anchor>
      </Flex>
    </MatineFooter>
  )
}
