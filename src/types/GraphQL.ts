import { Item } from './Items'

export type GraphQLItem = {
  getItem: Item
}

export interface GraphQLItems {
  queryItem: Item[]
}

export interface GraphQLReviews {
  queryReview: {
    id: string
    text: string
    item: GraphQLReviewsItem
    __typename: string
  }[]
}

export interface GraphQLReviewsItem {
  name: string
  img: string
  price: number
  description: string
  __typename: string
}

export interface GraphQLDeleteReview {
  deleteReview: DeleteReview
}

export interface DeleteReview {
  msg: string
  numUids: number
  __typename: string
}

export interface GraphQLResponse {
  numUids: number
}

export interface GraphQLAddReview {
  addReview: GraphQLResponse
}

export interface GraphQLUpdateReview {
  updateReview: GraphQLResponse
}

export interface GraphQLAddItem {
  addItem: GraphQLResponse
}

export interface GraphQLEditItem {
  updateItem: GraphQLResponse
}

export interface GraphQLDeleteItem {
  deleteItem: { msg: string; numUids: number }
}
