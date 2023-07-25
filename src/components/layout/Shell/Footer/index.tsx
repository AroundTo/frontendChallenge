import { Signature } from '@/src/components/svgs/Signature'
import { Anchor, Flex, Footer as MatineFooter } from '@mantine/core'
import Link from 'next/link'

export const Footer = () => {
  return (
    <MatineFooter p="lg" px={50} bg="gray.2" withBorder={false} height="auto">
      <Flex
        align="center"
        justify="space-between"
        sx={(theme) => ({
          [theme.fn.smallerThan('md')]: {
            flexDirection: 'column',
            gap: 30,
          },
        })}
      >
        <Flex direction="column">
          <Anchor
            size="sm"
            component={Link}
            href="https://github.com/AroundTo/frontendChallenge"
            color="gray"
            align="center"
            target="_blank"
          >
            {'Around Front End Challenge'}
          </Anchor>
        </Flex>
        <Anchor
          target="_blank"
          href="https://www.julian-medina.dev/"
          component={Link}
        >
          <Signature svgProps={{ height: 40 }} color="#aaa" />
        </Anchor>
      </Flex>
    </MatineFooter>
  )
}
