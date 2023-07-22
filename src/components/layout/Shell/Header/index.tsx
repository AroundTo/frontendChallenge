import {
  Flex,
  Header as MantineHeader,
  MediaQuery,
  useMantineTheme,
} from '@mantine/core'
import { Desktop } from './Desktop'
import { Mobile } from './Mobile'

export const Header = () => {
  const theme = useMantineTheme()
  return (
    <MantineHeader
      bg="#0000"
      withBorder={false}
      height={{ base: 70, md: 130 }}
      sx={{
        [theme.fn.smallerThan('lg')]: {
          paddingInline: 30,
        },
        paddingInline: 60,
        paddingBlock: 30,
      }}
    >
      <Flex align="center" h="100%">
        <MediaQuery smallerThan="md" styles={{ display: 'none' }}>
          <div style={{ width: '100%' }}>
            <Desktop />
          </div>
        </MediaQuery>

        <MediaQuery largerThan="md" styles={{ display: 'none' }}>
          <div style={{ width: '100%' }}>
            <Mobile />
          </div>
        </MediaQuery>
      </Flex>
    </MantineHeader>
  )
}
