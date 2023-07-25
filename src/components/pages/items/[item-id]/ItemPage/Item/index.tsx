import { Review } from '@/src/types/Items'
import { Divider } from '@mantine/core'
import { ItemBanner } from './Banner'
import { ItemComments } from './Comments'
import { ItemHeader } from './ItemHeader'

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
      <ItemHeader name={name} />
      <Divider my={10} />
      <ItemBanner
        name={name}
        description={description}
        img={img}
        price={price}
      />
      <Divider my={10} />
      <ItemComments reviews={reviews} productId={productId} />
    </>
  )
}
