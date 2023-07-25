import { ItemPage } from '@/src/components/pages/items/[item-id]/ItemPage'
import { NextPage } from 'next'
import { useRouter } from 'next/router'

export const ItemNextPage: NextPage = () => {
  const itemId = useRouter().query['item-id'] as string
  return <ItemPage itemId={itemId} />
}

export default ItemNextPage
