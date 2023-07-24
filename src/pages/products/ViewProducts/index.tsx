import { useNavigate } from 'react-router-dom'
import PageLayout from '../../../components/layouts/PageLayout/PageLayout'
import ProductCard from '../../../components/products/ProductCard/ProductCard'
import { useItems } from '../../../graphql/hooks'

// TODO: handle empty products list
// TODO: handle fetch error

const ViewProducts = () => {
  const navigate = useNavigate()
  const { items, loading } = useItems()

  const onProductCardClick = (name: string) => {
    navigate(name)
  }

  return (
    <PageLayout
      className="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-3 lg:grid-cols-4 lg:gap-4"
      loading={loading}
      loadingMessage="Loading products"
      title={`Products ${items ? `(${items.length})` : ''}`}
    >
      {items?.map(
        item =>
          item && (
            <ProductCard
              key={item.name}
              img={item.img}
              name={item.name}
              price={item.price}
              totalReviews={item.reviewsAggregate?.count || 0}
              onClick={() => onProductCardClick(item.name)}
            />
          )
      )}
    </PageLayout>
  )
}

export default ViewProducts
