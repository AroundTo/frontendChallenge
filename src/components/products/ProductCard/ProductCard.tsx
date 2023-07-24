import { CustomComponent } from '../../../types'
import { ProductCardType } from './ProductCard.types'
import './ProductCard.styles.scss'
import clsx from 'clsx'
import Button from '../../ui/Button'

const ProductCard: CustomComponent<ProductCardType> = ({
  img,
  name,
  price,
  totalReviews,
  className,
  onClick,
}) => (
  <div
    className={clsx(
      'product-card border border-gray-300 rounded p-2 md:p-4 flex flex-col bg-white',
      className
    )}
  >
    <img
      alt={name}
      className="w-28 h-28 object-contain self-center m-2 mb-4"
      src={img}
    />
    <p className="font-semibold text-gray-700 flex flex-1">{name}</p>
    <p className="text-xl text-primary-600 font-semibold my-2 ml-2">
      $ {price}
    </p>
    <Button className="uppercase font-semibold" onClick={onClick}>
      Reviews ({totalReviews < 1000 ? totalReviews : '999+'})
    </Button>
  </div>
)

export default ProductCard
