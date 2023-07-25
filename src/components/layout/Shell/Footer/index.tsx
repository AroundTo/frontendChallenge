import { Signature } from '@/src/components/svgs/Signature'
import { Flex, Footer as MatineFooter, Text } from '@mantine/core'

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
          <Text size="sm" color="gray" align="center">
            {'Around Front End Challenge'}
          </Text>
        </Flex>
        <Signature svgProps={{ height: 40 }} color="#aaa" />
      </Flex>
    </MatineFooter>
  )
}
