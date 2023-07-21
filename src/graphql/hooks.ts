import { useQuery } from '@apollo/client'
import { itemByNameQuery, itemsQuery, reviewsQuery } from './queries'

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

export const useItem = (name: string) => {
  const { data, error, loading } = useQuery(itemByNameQuery, {
    fetchPolicy: 'network-only', // new data will be fetched everytime instead of using cache
    variables: {
      name,
    },
  })

  return {
    item: data?.getItem,
    loading,
    error,
  }
}

export const useReviews = () => {
  const { data, error, loading } = useQuery(reviewsQuery, {
    fetchPolicy: 'network-only', // new data will be fetched everytime instead of using cache
  })
  return {
    reviews: data?.queryReview,
    loading,
    error,
  }
}
