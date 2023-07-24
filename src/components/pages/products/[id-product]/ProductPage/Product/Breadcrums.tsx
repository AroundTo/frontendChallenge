import { APP_URLS } from '@/src/constants/URLS'
import { Anchor, Breadcrumbs } from '@mantine/core'
import Link from 'next/link'

export const ProductBreadcrums = ({ name }: { name: string }) => {
  return (
    <Breadcrumbs>
      <Anchor href={APP_URLS.PRODUCTS} component={Link}>
        {'Products'}
      </Anchor>
      <Anchor href={APP_URLS.PRODUCTS} component={Link}>
        {name}
      </Anchor>
    </Breadcrumbs>
  )
}
