import { useMutation, useQuery, useSubscription } from '@apollo/client'
import {
  createReviewMutation,
  itemByNameSubscription,
  itemsQuery,
  reviewsSubscription,
} from './queries'

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
  const { data, error, loading } = useSubscription(itemByNameSubscription, {
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
  const { data, error, loading } = useSubscription(reviewsSubscription, {
    fetchPolicy: 'network-only', // new data will be fetched everytime instead of using cache
  })
  return {
    reviews: data?.queryReview,
    loading,
    error,
  }
}

export const useCreateReview = () => {
  const [mutate, { loading, error, data }] = useMutation(createReviewMutation)

  const createReview = async ({
    text,
    itemName,
  }: {
    text: string
    itemName: string
  }) =>
    await mutate({
      variables: { input: [{ text, item: { name: itemName } }] },
    })

  return {
    createReview,
    loading,
    error,
    review: data?.addReview?.review?.[0] || null,
  }
}
