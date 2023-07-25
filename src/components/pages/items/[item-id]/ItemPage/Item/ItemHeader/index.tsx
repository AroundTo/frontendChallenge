import { APP_URLS } from '@/src/constants/URLS'
import { ActionIcon, Anchor, Breadcrumbs, Flex } from '@mantine/core'
import Link from 'next/link'
import { Edit } from 'tabler-icons-react'
import { DeleteItemButton } from './DeleteItemButton'

export const ItemHeader = ({ name }: { name: string }) => {
  return (
    <Flex justify="space-between">
      <Breadcrumbs>
        <Anchor href={APP_URLS.PRODUCTS} component={Link}>
          {'Items'}
        </Anchor>
        <Anchor href={APP_URLS.PRODUCTS} component={Link}>
          {name}
        </Anchor>
      </Breadcrumbs>
      <Flex justify="end" gap={4}>
        <ActionIcon href={`${APP_URLS.EDIT_PRODUCT}/${name}`} component={Link}>
          <Edit size="1.5rem" />
        </ActionIcon>
        <ActionIcon>
          <DeleteItemButton name={name} />
        </ActionIcon>
      </Flex>
    </Flex>
  )
}
