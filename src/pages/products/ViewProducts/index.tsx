import PageLayout from '../../../components/layouts/PageLayout/PageLayout'
import ProductCard from '../../../components/products/ProductCard/ProductCard'
import { useItems } from '../../../graphql/hooks'

// TODO: handle empty products list
// TODO: handle fetch error

const ViewProducts = () => {
  const { items, loading } = useItems()

  return (
    <PageLayout
      className="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-3 lg:grid-cols-4 lg:gap-4"
      loading={loading}
      loadingMessage="Loading products"
      title="Products"
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
              onClick={e => alert(item.name)}
            />
          )
      )}
    </PageLayout>
  )
}

export default ViewProducts
