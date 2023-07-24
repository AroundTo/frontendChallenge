import { APP_URLS } from '@/src/constants/URLS'
import { Card, Image, Text } from '@mantine/core'
import Link from 'next/link'

export const ProductCard = ({ product }: { product: any }) => {
  return (
    <Card
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
      component={Link}
      href={`${APP_URLS.PRODUCTS}/${product.name}`}
    >
      {product && (
        <>
          <Card.Section>
            <Image alt={product.name} height={200} src={product?.img} />
          </Card.Section>
          <Text size="xl">{`$${product.price}`}</Text>
          <Text color="dimmed" size="sm">
            {product.name}
          </Text>
        </>
      )}
    </Card>
  )
}
