import { APP_URLS } from '@/src/constants/URLS'
import { Product } from '@/src/types/GraphQL'
import { Card, Image, Text } from '@mantine/core'
import Link from 'next/link'

export const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Card
      shadow="sm"
      radius="md"
      withBorder
      component={Link}
      href={`${APP_URLS.PRODUCTS}/${product.name}`}
    >
      <Card.Section>
        <Image
          p="xs"
          bg="gray.2"
          alt={product.name}
          fit="contain"
          height={200}
          src={product?.img}
        />
      </Card.Section>
      <Text size="xl">{`$${product.price}`}</Text>
      <Text color="dimmed" size="sm">
        {product.name}
      </Text>
    </Card>
  )
}
