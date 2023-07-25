import { Breadcrumbs, Divider, Flex, Skeleton } from '@mantine/core'

export const LoadingEditProductPage = () => {
  return (
    <>
      <Flex direction="column">
        <Breadcrumbs>
          <Skeleton height="1.5rem" width={100} />
          <Skeleton height="1.5rem" width={100} />
        </Breadcrumbs>
      </Flex>
      <Divider my={10} />

      <Flex direction="column" gap={10}>
        <Skeleton height="2rem" width="30%" />
        <Flex direction="column" gap={10} m="xl">
          <Flex direction="column" gap={10} my={10}>
            <Skeleton height="1rem" width="22%" />
            <Skeleton height="2rem" width="100%" />
          </Flex>
          <Flex direction="column" gap={10} my={10}>
            <Skeleton height="1rem" width="20%" />
            <Skeleton height="2rem" width="100%" />
          </Flex>
          <Flex direction="column" gap={10} my={10}>
            <Skeleton height="1rem" width="30%" />
            <Skeleton height="6rem" width="100%" />
          </Flex>
          <Flex justify="right" w="100%" gap={10} my={10}>
            <Skeleton height="2rem" radius="xl" width="20%" />
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}
