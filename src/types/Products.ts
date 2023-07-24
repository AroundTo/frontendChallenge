import { Product } from './GraphQL'

export type GraphQLProduct = {
  getItem: Product
}

export interface GraphQLProducts {
  queryItem: Product[]
}
