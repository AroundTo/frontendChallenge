import { Shell } from '@/src/components/layout/Shell'
import { Container, Divider, Title } from '@mantine/core'
import { CreateItemBreadcrums } from './Breadcrums'
import { CreateItemForm } from './CreateItemForm'

export const CreateItemPage = () => {
  return (
    <Shell title="Create item">
      <Container mt={20}>
        <CreateItemBreadcrums />
        <Divider my={10} />
        <Title>{'Create item'}</Title>
        <CreateItemForm />
      </Container>
    </Shell>
  )
}
