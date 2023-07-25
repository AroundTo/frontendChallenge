import { Shell } from '@/src/components/layout/Shell'
import { Anchor, Avatar, Container, Grid, Text, Title } from '@mantine/core'
import Link from 'next/link'

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
            <Anchor component={Link} href="https://www.julian-medina.dev/">
              {'About me'}
            </Anchor>
          </Grid.Col>
        </Grid>
      </Container>
    </Shell>
  )
}
