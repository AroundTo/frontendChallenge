import { Footer as MatineFooter, Text } from '@mantine/core'

export const Footer = () => {
  return (
    <MatineFooter p="lg" bg="gray.2" withBorder={false} height="auto">
      <Text color="gray" align="center">
        {'Technical test'}
      </Text>
      <Text size="xs" color="dimmed" align="center">
        {'Julián D. Medina'}
      </Text>
    </MatineFooter>
  )
}
