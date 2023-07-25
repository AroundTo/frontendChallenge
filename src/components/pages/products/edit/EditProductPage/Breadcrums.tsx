import { APP_URLS } from '@/src/constants/URLS'
import { Anchor, Breadcrumbs } from '@mantine/core'
import Link from 'next/link'

export const EditProductBreadcrums = ({ productId }: { productId: string }) => {
  return (
    <Breadcrumbs>
      <Anchor href={APP_URLS.PRODUCTS} component={Link}>
        {'Products'}
      </Anchor>
      <Anchor href={APP_URLS.EDIT_PRODUCT} component={Link}>
        {`Edit ${productId}`}
      </Anchor>
    </Breadcrumbs>
  )
}
