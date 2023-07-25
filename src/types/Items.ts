export type Product = {
  __typename: string
  name: string
  img: string
  price: number
  description: string
  reviews: Review[]
  reviewsAggregate: ReviewsAggregate
}

export interface Review {
  __typename: string
  id: string
  text: string
}

export interface ReviewsAggregate {
  __typename: string
  count: number
  textMin: string
  textMax: string
}

export interface Delete {
  deleteReview: DeleteReview
}

export interface DeleteReview {
  msg: string
  numUids: number
  __typename: string
}
