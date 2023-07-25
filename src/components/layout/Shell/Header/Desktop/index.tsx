import { AppIcon } from '@/src/components/svgs/AppIcon'
import { APP_URLS } from '@/src/constants/URLS'
import { Anchor, Button, Flex } from '@mantine/core'
import Link from 'next/link'
import { HeaderLink } from './Navbar/Link'

export const Desktop = () => {
  return (
    <Flex align="center">
      <Anchor href={APP_URLS.INDEX} component={Link}>
        <AppIcon color="#212121" svgProps={{ height: 35 }} />
      </Anchor>
      <Flex w="100%" justify="right">
        <Flex mx={30} align="center">
          <HeaderLink href={APP_URLS.PRODUCTS}>{'Items'}</HeaderLink>
        </Flex>
        <Button color="dark" radius="xl" sx={{ transition: '1000ms' }}>
          {'Login'}
        </Button>
      </Flex>
    </Flex>
  )
}
