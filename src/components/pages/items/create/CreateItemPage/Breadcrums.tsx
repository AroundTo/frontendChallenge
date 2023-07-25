import { APP_URLS } from '@/src/constants/URLS'
import { Anchor, Breadcrumbs } from '@mantine/core'
import Link from 'next/link'

export const CreateItemBreadcrums = () => {
  return (
    <Breadcrumbs>
      <Anchor href={APP_URLS.PRODUCTS} component={Link}>
        {'Items'}
      </Anchor>
      <Anchor href={APP_URLS.CREATE_PRODUCT} component={Link}>
        {'Create item'}
      </Anchor>
    </Breadcrumbs>
  )
}
