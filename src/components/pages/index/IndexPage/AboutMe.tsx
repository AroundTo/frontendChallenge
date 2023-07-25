import { Anchor, Grid, Image, Text, Title } from '@mantine/core'
import Link from 'next/link'

export const AboutMe = () => {
  return (
    <Grid gutter="xl" justify="center" align="center">
      <Grid.Col md={6} p={30}>
        <Image
          width="100%"
          radius="md"
          src="profilePhoto.jpeg"
          alt="Profile photo"
        />
      </Grid.Col>
      <Grid.Col md={6}>
        <Text size="1.5rem">{'Hello! My name is'}</Text>
        <Title
          mt={-5}
          size="3rem"
          variant="gradient"
          gradient={{ from: 'pink.4', to: 'pink.9', deg: 45 }}
          style={{ fontFamily: 'Greycliff CF, sans-serif' }}
        >
          {` Julián Medina `}
        </Title>
        <Text size="xl">{`I'm a web developer from Colombia 🇨🇴`}</Text>
        <Anchor
          size="xl"
          component={Link}
          href="https://www.julian-medina.dev/"
        >
          {'About me'}
        </Anchor>
      </Grid.Col>
    </Grid>
  )
}
