import { useParams } from 'react-router-dom'
import PageLayout from '../../../components/layouts/PageLayout/PageLayout'
import { useItem } from '../../../graphql/hooks'

// TODO: handle empty product's reviews
// TODO: handle fetch error

const ProductDetails = () => {
  const { productName = '' } = useParams()
  const { item, loading } = useItem(productName)

  return (
    <PageLayout
      loading={loading}
      loadingMessage="Loading product details"
      notFoundMessage={!item && !loading ? 'Product not found' : ''}
      title="Product's details"
    >
      <p>{item?.name}</p>
      <p>Price: $ {item?.price}</p>
    </PageLayout>
  )
}

export default ProductDetails
