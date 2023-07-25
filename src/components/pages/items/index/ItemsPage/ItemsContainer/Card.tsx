import { APP_URLS } from '@/src/constants/URLS'
import { Item } from '@/src/types/Items'
import { Card, Image, Skeleton, Text } from '@mantine/core'
import Link from 'next/link'

export const ItemCard = ({ product }: { product?: Item }) => {
  if (!product)
    return (
      <Card shadow="sm" radius="md" withBorder>
        <Card.Section>
          <Skeleton h={220} />
        </Card.Section>
        <Skeleton mt={8} h={20} />
        <Skeleton mb={4} mt={10} h={12} />
      </Card>
    )

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
      <Text lineClamp={1} color="dimmed" size="sm">
        {product.name}
      </Text>
    </Card>
  )
}
