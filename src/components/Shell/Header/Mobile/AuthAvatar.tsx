import { Avatar } from '@mantine/core'

export const AuthAvatarMobile = () => {
  return (
    <>
      <Avatar
        sx={{ transition: '1000ms' }}
        size={25}
        radius="xl"
        m={0}
        color="primary"
        variant="filled"
      />
    </>
  )
}
