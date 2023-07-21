import { Shell } from '@/layout/Shell'
import { NextPage } from 'next'
import { useRouter } from 'next/router'

export const ProductNextPage: NextPage = () => {
  const idProduct = useRouter().query['id-product'] as string
  return (
    <Shell>
      {'Productss'} {idProduct}
    </Shell>
  )
}

export default ProductNextPage
