import { APP_URLS } from '@/src/constants/URLS'
import { Card, Flex, Image, Skeleton, Text } from '@mantine/core'
import Link from 'next/link'

export const ReviewCard = ({
  name,
  description,
  img,
}: {
  name: string
  description: string
  img: string
}) => {
  return (
    <Card
      component={Link}
      href={`${APP_URLS.PRODUCTS}/${name}`}
      my="xl"
      shadow="xs"
    >
      <Flex>
        <Image alt={name} fit="contain" width={100} height={100} src={img} />
        <Flex direction="column" mx="xl" justify="center">
          <Text size="lg">{name}</Text>
          <Text lineClamp={2} color="dimmed" size="sm">
            {description}
          </Text>
        </Flex>
      </Flex>
    </Card>
  )
}

export const LoadingReviewCard = () => {
  return (
    <Card my="xl" shadow="xs">
      <Flex>
        <Flex w={100}>
          <Skeleton radius="md" width={100} height={100} />
        </Flex>
        <Flex w="100%" direction="column" mx="xl" justify="center">
          <Skeleton mt={8} h={20} />
          <Skeleton mb={4} mt={20} h={12} />
          <Skeleton mb={4} w="50%" mt={4} h={12} />
        </Flex>
      </Flex>
    </Card>
  )
}
