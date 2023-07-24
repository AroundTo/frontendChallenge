import { Review } from '@/src/types/GraphQL'
import { Divider } from '@mantine/core'
import { ProductBanner } from './Banner'
import { ProductBreadcrums } from './Breadcrums'
import { ProductComments } from './Comments'

export interface Props {
  name: string
  description: string
  img: string
  price: number
  reviews: Review[]
  productId: string
}

export const LoadedProduct = ({
  name,
  description,
  img,
  price,
  reviews,
  productId,
}: Props) => {
  return (
    <>
      <ProductBreadcrums name={name} />
      <Divider my={10} />
      <ProductBanner
        name={name}
        description={description}
        img={img}
        price={price}
      />
      <Divider my={10} />
      <ProductComments reviews={reviews} productId={productId} />
    </>
  )
}
