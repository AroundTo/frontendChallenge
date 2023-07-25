import { GraphQLReviews } from '@/src/types/GraphQL'
import { gql, useSubscription } from '@apollo/client'
import { LoadingReviewCard, ReviewCard } from './Card'

export const ReviewsContainer = () => {
  const { data, loading } = useSubscription<GraphQLReviews>(gql`
    subscription QueryReview {
      queryReview {
        id
        text
        item {
          name
          img
          price
          description
        }
      }
    }
  `)
  return (
    <>
      {!loading && data && data.queryReview ? (
        <>
          {data.queryReview.map((review, index) => (
            <div key={`review-${review.id}`}>
              {review && review.item && (
                <ReviewCard
                  name={review.item.name}
                  description={review.item.description}
                  img={review.item.img}
                  text={review.text}
                />
              )}
            </div>
          ))}
        </>
      ) : (
        <>
          {' '}
          {[...Array(10)].map((item, index) => (
            <LoadingReviewCard key={`loadingcard-${index}`} />
          ))}
        </>
      )}
    </>
  )
}
