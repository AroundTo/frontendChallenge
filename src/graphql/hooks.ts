import { useQuery } from '@apollo/client'
import { itemsQuery } from './queries'

export const useItems = () => {
  const { data, error, loading } = useQuery(itemsQuery, {
    fetchPolicy: 'network-only', // new data will be fetched everytime instead of using cache
  })
  return {
    items: data?.queryItem,
    loading,
    error,
  }
}
