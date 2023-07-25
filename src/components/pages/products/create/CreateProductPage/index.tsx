import { Shell } from '@/src/components/layout/Shell'
import { Container, Divider, Title } from '@mantine/core'
import { CreateProductBreadcrums } from './Breadcrums'
import { CreateProductForm } from './CreateProductForm'

export const CreateProductPage = () => {
  return (
    <Shell>
      <Container mt={20}>
        <CreateProductBreadcrums />
        <Divider my={10} />
        <Title>{'Create item'}</Title>
        <CreateProductForm />
      </Container>
    </Shell>
  )
}
