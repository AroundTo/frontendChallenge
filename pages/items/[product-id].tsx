import { ProductPage } from '@/src/components/pages/products/[product-id]/ProductPage'
import { NextPage } from 'next'
import { useRouter } from 'next/router'

export const ProductNextPage: NextPage = () => {
  const productId = useRouter().query['product-id'] as string
  return <ProductPage productId={productId} />
}

export default ProductNextPage
