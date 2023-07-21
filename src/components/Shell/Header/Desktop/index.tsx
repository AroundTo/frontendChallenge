import { APP_URLS } from '@/src/constants/URLS'
import { QSDIcon } from '@/src/svgs/QSDIcons'
import { Anchor, Flex } from '@mantine/core'
import Link from 'next/link'
import { AuthAvatarDesktop } from './AuthAvatar'
import { HeaderLinks } from './Navbar'

export const Desktop = () => {
  return (
    <Flex align="center">
      <Anchor href={APP_URLS.INDEX} component={Link}>
        <QSDIcon svgProps={{ height: 50 }} variant="qsdiconscorto" />
      </Anchor>
      <HeaderLinks />
      <AuthAvatarDesktop />
    </Flex>
  )
}
