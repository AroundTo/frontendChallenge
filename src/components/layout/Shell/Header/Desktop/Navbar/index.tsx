import { APP_URLS } from '@/src/constants/URLS'
import { Button, Flex } from '@mantine/core'
import { HeaderLink } from './Link'

export const HeaderLinks = () => {
  return (
    <Flex w="100%" bg="red">
      <Flex w="100%" mx={30} align="center">
        <HeaderLink href={APP_URLS.PRODUCTS}>{'Products'}</HeaderLink>
      </Flex>
      <Button radius="xl" sx={{ transition: '1000ms' }}>
        {'Iniciar sesión'}
      </Button>
    </Flex>
  )
}
