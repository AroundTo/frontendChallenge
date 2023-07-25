import { APP_URLS } from '@/src/constants/URLS'
import { ActionIcon, Anchor, Breadcrumbs, Flex } from '@mantine/core'
import Link from 'next/link'
import { Edit } from 'tabler-icons-react'
import { DeleteProductButton } from './DeleteProductButton'

export const ProductHeader = ({ name }: { name: string }) => {
  return (
    <Flex justify="space-between">
      <Breadcrumbs>
        <Anchor href={APP_URLS.PRODUCTS} component={Link}>
          {'Products'}
        </Anchor>
        <Anchor href={APP_URLS.PRODUCTS} component={Link}>
          {name}
        </Anchor>
      </Breadcrumbs>
      <Flex justify="end" gap={4}>
        <ActionIcon>
          <Edit size="1.5rem" />
        </ActionIcon>
        <ActionIcon>
          <DeleteProductButton />
        </ActionIcon>
      </Flex>
    </Flex>
  )
}
