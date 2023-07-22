import { Box, useMantineTheme } from '@mantine/core'
import { getBackgroundPattern } from './src/getBackgroundPattern'

export const BackgroundPattern = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const theme = useMantineTheme()
  return (
    <Box
      w="100%"
      h="100%"
      sx={{
        [theme.fn.smallerThan('xs')]: {
          paddingInline: 5,
          paddingBlock: 5,
        },

        paddingInline: 60,
        paddingBlock: 20,

        transition: '1000ms',

        backgroundColor: theme.colors.pink[6],
        backgroundImage: getBackgroundPattern(
          'signal',
          theme.colors.dark[8].replace('#', ''),
          0.2
        ),
      }}
    >
      {children}
    </Box>
  )
}
