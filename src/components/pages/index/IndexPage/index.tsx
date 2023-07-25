import { Shell } from '@/src/components/layout/Shell'
import { Avatar, Container, Grid, Text, Title } from '@mantine/core'

export const IndexPage = () => {
  return (
    <Shell>
      <Container my={40}>
        <Grid gutter="xl">
          <Grid.Col md={6}>
            <Avatar
              size={400}
              radius="md"
              src="profilePhoto.jpeg"
              alt="Profile photo"
            />
          </Grid.Col>
          <Grid.Col md={6}>
            <Title mt="xl" order={3}>
              {'Hello! My name is'}
            </Title>
            <Title
              size="3rem"
              variant="gradient"
              gradient={{ from: 'pink.4', to: 'pink.9', deg: 45 }}
              style={{ fontFamily: 'Greycliff CF, sans-serif' }}
            >
              {` Julián Medina `}
            </Title>
            <Text size="xl">
              {' '}
              {`I'm a frontend developer from Colombia 🇨🇴`}
            </Text>
            <Text color="dimmed" mt="md">
              {`Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum`}
            </Text>
          </Grid.Col>
        </Grid>
      </Container>
    </Shell>
  )
}
