import { Anchor, Center, Flex } from '@mantine/core'

import { AppIcon } from '@/src/components/svgs/AppIcon'
import { APP_URLS } from '@/src/constants/URLS'
import Link from 'next/link'
import { AuthAvatarMobile } from './AuthAvatar'
import { MenuLinks } from './Menu'

export const Mobile = () => {
  return (
    <Flex align="center" justify="space-between" w="100%">
      <MenuLinks />

      <Center w="100%">
        <Anchor href={APP_URLS.INDEX} component={Link}>
          <AppIcon svgProps={{ height: 30 }} variant="qsdiconslargo" />
        </Anchor>
      </Center>

      <AuthAvatarMobile />
    </Flex>
  )
}
