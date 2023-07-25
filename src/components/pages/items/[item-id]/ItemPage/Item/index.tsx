import { Review } from '@/src/types/Items'
import { Divider } from '@mantine/core'
import { ProductComments } from './Comments'
import { ProductBanner } from './ProductBanner'
import { ProductHeader } from './ProductHeader'

export interface Props {
  name: string
  description: string
  img: string
  price: number
  reviews: Review[]
  productId: string
}

export const LoadedItem = ({
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
