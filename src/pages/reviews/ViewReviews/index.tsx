import { useNavigate } from 'react-router-dom'
import PageLayout from '../../../components/layouts/PageLayout/PageLayout'
import { useReviews } from '../../../graphql/hooks'

// TODO: handle empty reviews list
// TODO: handle fetch error

const ViewReviews = () => {
  const navigate = useNavigate()
  const { reviews, loading } = useReviews()

  const onProductClick = (name?: string) => {
    if (name) {
      navigate(`/products/${name}`)
    }
  }

  return (
    <PageLayout
      className="border border-gray-300 bg-white rounded"
      loading={loading}
      loadingMessage="Loading reviews"
      title={`Reviews ${reviews ? `(${reviews.length})` : ''}`}
    >
      <ul className="divide-y divide-slate-200 border">
        {reviews?.map(
          review =>
            review && (
              <li key={review.id} className="p-4 odd:bg-white even:bg-gray-50">
                <p>{review.text}</p>
                <p className="text-gray-500 text-sm">ID: {review.id}</p>
                <div
                  className="flex border p-2 rounded items-center mt-2 bg-neutral-50 cursor-pointer hover:bg-gray-100"
                  role="presentation"
                  onClick={() => onProductClick(review.item?.name)}
                >
                  <img
                    alt={review.item?.name}
                    className="object-contain w-10 h-10"
                    src={review.item?.img}
                  />
                  <div className="flex flex-col">
                    <p className="ml-2 text-sm w-56 sm:w-80 truncate">
                      {review.item?.name}
                    </p>
                    <p className="ml-2 text-sm text-gray-500 italic w-52 sm:w-72 truncate">
                      {review.item?.description}
                    </p>
                  </div>
                </div>
              </li>
            )
        )}
      </ul>
    </PageLayout>
  )
}

export default ViewReviews
