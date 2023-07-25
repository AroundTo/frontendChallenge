import { Shell } from '@/src/components/layout/Shell'
import { APP_URLS } from '@/src/constants/URLS'
import { Button, Container, Divider, Flex, Title } from '@mantine/core'
import Link from 'next/link'
import { Plus } from 'tabler-icons-react'
import { ProductsContainer } from './ProductsContainer'

export const ProductsPage = () => {
  return (
    <Shell>
      <Container>
        <Flex justify="space-between" align="center">
          <Title>{'Products'}</Title>
          <Button
            component={Link}
            href={APP_URLS.CREATE_PRODUCT}
            leftIcon={<Plus />}
            radius="xl"
            variant="outline"
          >
            {'Create new product'}
          </Button>
        </Flex>
        <Divider />
        <ProductsContainer />
      </Container>
    </Shell>
  )
}
