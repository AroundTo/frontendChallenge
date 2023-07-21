import { APP_URLS } from '@/src/constants/URLS'
import { Flex } from '@mantine/core'
import { HeaderLink } from './Link'

export const HeaderLinks = () => {
  return (
    <Flex w="100%">
      <Flex w="100%" justify="space-around" mx={30} align="center">
        <HeaderLink href={APP_URLS.PERFILES}>{'Perfiles'}</HeaderLink>
        <HeaderLink href={APP_URLS.PROGRAMAS}>{'Programas'}</HeaderLink>
        <HeaderLink href={APP_URLS.COMUNIDADES}>{'Comunidades'}</HeaderLink>
        <HeaderLink href={APP_URLS.ARTICULOS}>{'Artículos'}</HeaderLink>
        <HeaderLink href={APP_URLS.TESTIMONIOS}>{'Testimonios'}</HeaderLink>
        <HeaderLink newTab href={APP_URLS.TRACKER}>
          {'Tracker QSD'}
        </HeaderLink>
      </Flex>
    </Flex>
  )
}
