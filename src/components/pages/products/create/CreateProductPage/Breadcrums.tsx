import { APP_URLS } from '@/src/constants/URLS'
import { Anchor, Breadcrumbs } from '@mantine/core'
import Link from 'next/link'

export const CreateProductBreadcrums = () => {
  return (
    <Breadcrumbs>
      <Anchor href={APP_URLS.PRODUCTS} component={Link}>
        {'Products'}
      </Anchor>
      <Anchor href={APP_URLS.CREATE_PRODUCT} component={Link}>
        {'Create product'}
      </Anchor>
    </Breadcrumbs>
  )
}
