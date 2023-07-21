import { Flex, Footer as MatineFooter, MediaQuery } from '@mantine/core'

export const Footer = () => {
  return (
    <MatineFooter bg="#0000" withBorder={false} height="auto">
      <Flex align="center" h="100%">
        <MediaQuery smallerThan="md" styles={{ display: 'none' }}>
          <div style={{ width: '100%' }}>{'desktop'}</div>
        </MediaQuery>

        <MediaQuery largerThan="md" styles={{ display: 'none' }}>
          <div style={{ width: '100%' }}>{'mobile'}</div>
        </MediaQuery>
      </Flex>
    </MatineFooter>
  )
}
