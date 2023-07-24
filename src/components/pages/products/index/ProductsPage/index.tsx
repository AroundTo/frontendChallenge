import { Shell } from '@/src/components/layout/Shell'
import { Container, Divider, Title } from '@mantine/core'
import { ProductsContainer } from './ProductsContainer'

export const ProductsPage = () => {
  return (
    <Shell>
      <Container>
        <Title>{'Products'}</Title>
        <Divider />
        <ProductsContainer />
      </Container>
    </Shell>
  )
}
