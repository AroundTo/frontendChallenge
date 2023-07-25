import { APP_URLS } from '@/src/constants/URLS'
import { Anchor, Breadcrumbs } from '@mantine/core'
import Link from 'next/link'

export const EditItemBreadcrums = ({ itemId }: { itemId: string }) => {
  return (
    <Breadcrumbs>
      <Anchor href={APP_URLS.PRODUCTS} component={Link}>
        {'Items'}
      </Anchor>
      <Anchor href={`${APP_URLS.PRODUCTS}/${itemId}`} component={Link}>
        {itemId}
      </Anchor>
      <Anchor href={APP_URLS.EDIT_PRODUCT} component={Link}>
        {`Edit`}
      </Anchor>
    </Breadcrumbs>
  )
}
