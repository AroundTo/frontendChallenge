export type Item = {
  __typename: string
  name: string
  img: string
  price: number
  description: string
  reviews: Review[]
}

export interface Review {
  __typename: string
  id: string
  text: string
}

export interface Delete {
  deleteReview: DeleteReview
}

export interface DeleteReview {
  msg: string
  numUids: number
  __typename: string
}
