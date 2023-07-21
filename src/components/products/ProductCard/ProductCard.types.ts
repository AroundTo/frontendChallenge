import React from 'react'

export type ProductCardType = {
  img: string
  name: string
  price: number
  totalReviews: number
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}
