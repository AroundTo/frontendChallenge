import { Product } from './GraphQL'

export type GraphQLProduct = {
  getItem: Product
}

export interface GraphQLProducts {
  queryItem: Product[]
}

export interface GraphQLDeleteReview {
  deleteReview: DeleteReview
}

export interface DeleteReview {
  msg: string
  numUids: number
  __typename: string
}

export interface GraphQLAddReview {
  addReview: AddReview
}

export interface AddReview {
  numUids: number
}
export interface GraphQLUpdateReview {
  updateReview: AddReview
}

export interface AddReview {
  numUids: number
}
export interface GraphQLAddItem {
  addItem: AddReview
}

export interface AddReview {
  numUids: number
}
