import { Box } from '@mantine/core'

export const BodyBox = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box
      bg="#F8F9FA"
      sx={{
        transition: '1000ms',
        borderRadius: 32,
        boxShadow: '0px -3px 31px rgba(0, 0, 0, 0.5)',
        backdropFilter: 'blur(2px)',
        overflow: 'hidden',
      }}
    >
      {children}
    </Box>
  )
}
