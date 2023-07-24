export type GraphQLProduct = {
  getItem: GetItem
}

export type GetItem = {
  __typename: string
  name: string
  img: string
  price: number
  description: string
}
