import { Burger, Divider, Modal, useMantineTheme } from '@mantine/core'

import { APP_URLS } from '@/src/constants/URLS'
import { useState } from 'react'
import { BuildingStore, Home, MessageCircle } from 'tabler-icons-react'
import { HeaderLink } from './Item'

export const MenuLinks = () => {
  const theme = useMantineTheme()
  const [opened, setOpened] = useState(false)

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        withCloseButton={false}
        overlayProps={{
          blur: 3,
        }}
      >
        <div data-autofocus />
        <HeaderLink icon={<Home />} href={APP_URLS.INDEX}>
          {'Home'}
        </HeaderLink>
        <Divider />
        <HeaderLink icon={<BuildingStore />} href={APP_URLS.PRODUCTS}>
          {'Items'}
        </HeaderLink>
        <HeaderLink icon={<MessageCircle />} href={APP_URLS.ALL_REVIEWS}>
          {'Reviews'}
        </HeaderLink>
      </Modal>

      <Burger
        opened={opened}
        onClick={() => setOpened((o) => !o)}
        size="md"
        p={0}
        color={theme.colors.gray[6]}
      />
    </>
  )
}
