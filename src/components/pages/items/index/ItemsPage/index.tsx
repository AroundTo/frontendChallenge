import { Shell } from '@/src/components/layout/Shell'
import { APP_URLS } from '@/src/constants/URLS'
import { Button, Container, Divider, Flex, Title } from '@mantine/core'
import Link from 'next/link'
import { Plus } from 'tabler-icons-react'
import { ItemsContainer } from './ItemsContainer'

export const ItemsPage = () => {
  return (
    <Shell title="Items">
      <Container>
        <Flex justify="space-between" align="center">
          <Title>{'Items'}</Title>
          <Button
            component={Link}
            href={APP_URLS.CREATE_PRODUCT}
            leftIcon={<Plus />}
            radius="xl"
            variant="outline"
            size="xs"
          >
            {'Create new item'}
          </Button>
        </Flex>
        <Divider />
        <ItemsContainer />
      </Container>
    </Shell>
  )
}
