import { APP_URLS } from '@/src/constants/URLS'
import { Item } from '@/src/types/Items'
import { Card, Image, Skeleton, Text } from '@mantine/core'
import Link from 'next/link'

export const ItemCard = ({ item }: { item?: Item }) => {
  if (!item)
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
      href={`${APP_URLS.PRODUCTS}/${item.name}`}
    >
      <Card.Section>
        <Image
          p="xs"
          bg="gray.2"
          alt={item.name}
          fit="contain"
          height={200}
          src={item?.img}
        />
      </Card.Section>
      <Text size="xl">{`$${item.price}`}</Text>
      <Text lineClamp={1} color="dimmed" size="sm">
        {item.name}
      </Text>
      <Text lineClamp={1} color="dimmed" size="xs">
        {`${
          item.reviews.length == 0
            ? 'No reviews'
            : item.reviews.length == 1
            ? '1 review'
            : `${item.reviews.length} reviews`
        }`}
      </Text>
    </Card>
  )
}
