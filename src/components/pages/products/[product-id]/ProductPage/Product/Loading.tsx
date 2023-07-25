import {
  Box,
  Breadcrumbs,
  Card,
  Divider,
  Flex,
  Grid,
  Skeleton,
} from '@mantine/core'

export const LoadingProduct = () => {
  return (
    <>
      <Flex direction="column">
        <Flex justify="space-between">
          <Breadcrumbs>
            <Skeleton height="1.5rem" width={100} />
            <Skeleton height="1.5rem" width={100} />
          </Breadcrumbs>
          <Flex justify="end" gap={4}>
            <Skeleton width="1.5rem" height="1.5rem" />
            <Skeleton width="1.5rem" height="1.5rem" />
          </Flex>
        </Flex>
      </Flex>
      <Divider my={10} />
      <Grid my={30}>
        <Grid.Col md={5} xs={12}>
          <Skeleton radius="md" height={300} />
        </Grid.Col>
        <Grid.Col md={7} xs={12} p="xl">
          <Flex direction="column" gap={10}>
            <Skeleton height="1.5rem" width="100%" />
            <Skeleton height="2rem" my={20} width="20%" />
            <Flex direction="column" gap={10}>
              <Skeleton height="1rem" width="96%" />
              <Skeleton height="1rem" width="98%" />
              <Skeleton height="1rem" width="90%" />
              <Skeleton height="1rem" width="95%" />
              <Skeleton height="1rem" width="40%" />
            </Flex>
          </Flex>
        </Grid.Col>
      </Grid>
      <Divider my={10} />
      <Box>
        <Skeleton height="2rem" my={20} width="20%" />

        <Card my="xl" shadow="xs">
          <Flex gap={20}>
            <Flex w="100%" direction="column" gap={10}>
              <Skeleton height="1.125rem" width="90%" />
              <Skeleton height="1.125rem" width="50%" />
            </Flex>
            <Flex gap={10} justify="end">
              <Skeleton width="1.125rem" height="1.125rem" />
              <Skeleton width="1.125rem" height="1.125rem" />
            </Flex>
          </Flex>
        </Card>

        <Card my="xl" shadow="xs">
          <Flex gap={20}>
            <Flex w="100%" direction="column" gap={10}>
              <Skeleton height="1.125rem" width="95%" />
              <Skeleton height="1.125rem" width="90%" />
              <Skeleton height="1.125rem" width="70%" />
            </Flex>
            <Flex gap={10} justify="end">
              <Skeleton width="1.125rem" height="1.125rem" />
              <Skeleton width="1.125rem" height="1.125rem" />
            </Flex>
          </Flex>
        </Card>

        <Card my="xl" shadow="xs">
          <Flex gap={20}>
            <Flex w="100%" direction="column" gap={10}>
              <Skeleton height="1.125rem" width="90%" />
              <Skeleton height="1.125rem" width="85%" />
              <Skeleton height="1.125rem" width="10%" />
            </Flex>
            <Flex gap={10} justify="end">
              <Skeleton width="1.125rem" height="1.125rem" />
              <Skeleton width="1.125rem" height="1.125rem" />
            </Flex>
          </Flex>
        </Card>
      </Box>
    </>
  )
}
