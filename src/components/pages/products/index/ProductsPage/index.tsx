import { Shell } from '@/src/components/layout/Shell'
import { Container } from '@mantine/core'
import { ProductsContainer } from './ProductsContainer'

export const ProductsPage = () => {
  return (
    <Shell>
      <Container>
        <ProductsContainer />
      </Container>
    </Shell>
  )
}
