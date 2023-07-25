import { APP_URLS } from '@/src/constants/URLS'
import { Blockquote, Card, Flex, Image, Skeleton, Text } from '@mantine/core'
import Link from 'next/link'

export const ReviewCard = ({
  name,
  description,
  img,
  text,
}: {
  name: string
  description: string
  img: string
  text: string
}) => {
  return (
    <Card
      component={Link}
      href={`${APP_URLS.PRODUCTS}/${name}`}
      my="xl"
      shadow="xs"
    >
      <Blockquote
        cite={
          <Flex align="center">
            <Image
              radius="xl"
              alt={name}
              fit="cover"
              width={30}
              height={30}
              src={img}
            />
            <Flex direction="column" mx="xs" justify="center">
              <Text weight="bold" size="sm">
                {name}
              </Text>
              <Text lineClamp={1} color="dimmed" size="xs">
                {description}
              </Text>
            </Flex>
          </Flex>
        }
      >
        {text}
      </Blockquote>
    </Card>
  )
}

export const LoadingReviewCard = () => {
  return (
    <Card my="xl" shadow="xs">
      <Blockquote
        cite={
          <Flex align="center">
            <Skeleton radius="md" width={30} height={30} />
            <Flex gap={8} w="100%" direction="column" mx="xs" justify="center">
              <Skeleton h={10} />
              <Skeleton h={10} />
            </Flex>
          </Flex>
        }
      >
        <Skeleton mb={4} w="95%" h={20} />
        <Skeleton mb={4} w="50%" mt={8} h={20} />
      </Blockquote>
    </Card>
  )
}
