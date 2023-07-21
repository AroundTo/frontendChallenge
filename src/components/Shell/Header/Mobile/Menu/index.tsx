import { Burger, Divider, Modal, useMantineTheme } from '@mantine/core'

import { APP_URLS } from '@/src/constants/URLS'
import { useState } from 'react'
import {
  Files,
  Home,
  School,
  Speakerphone,
  Tools,
  Track,
  Users,
} from 'tabler-icons-react'
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
          {'Inicio'}
        </HeaderLink>
        <Divider />
        <HeaderLink icon={<Tools />} href={APP_URLS.PERFILES}>
          {'Perfiles'}
        </HeaderLink>
        <HeaderLink icon={<School />} href={APP_URLS.PROGRAMAS}>
          {'Programas'}
        </HeaderLink>
        <HeaderLink icon={<Users />} href={APP_URLS.COMUNIDADES}>
          {'Comunidades'}
        </HeaderLink>
        <HeaderLink icon={<Files />} href={APP_URLS.ARTICULOS}>
          {'Articulos'}
        </HeaderLink>
        <HeaderLink icon={<Speakerphone />} href={APP_URLS.TESTIMONIOS}>
          {'Testimonios'}
        </HeaderLink>
        <HeaderLink newTab icon={<Track />} href={APP_URLS.TRACKER}>
          {'Tracker QSD'}
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
