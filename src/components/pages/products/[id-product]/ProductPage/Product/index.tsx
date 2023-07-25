import { Review } from '@/src/types/GraphQL'
import { Divider } from '@mantine/core'
import { ProductBanner } from './Banner'
import { ProductComments } from './Comments'
import { ProductHeader } from './ProductHeader'

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
      <ProductHeader name={name} />
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
