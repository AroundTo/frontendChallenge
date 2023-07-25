import { EditProductPage } from '@/src/components/pages/products/edit/EditProductPage'
import { NextPage } from 'next'
import { useRouter } from 'next/router'

export const EditProductNextPage: NextPage = () => {
  const productId = useRouter().query['product-id'] as string
  return <EditProductPage productId={productId} />
}

export default EditProductNextPage
