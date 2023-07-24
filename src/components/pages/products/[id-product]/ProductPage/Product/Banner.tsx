import { Grid, Image, Text, Title } from '@mantine/core'

type Props = { name: string; description: string; img: string; price: number }

export const ProductBanner = ({ name, description, img, price }: Props) => {
  return (
    <Grid my={30}>
      <Grid.Col md={5} xs={12}>
        <Image radius="md" fit="contain" height={300} alt={name} src={img} />
      </Grid.Col>
      <Grid.Col md={7} xs={12} p="xl">
        <Title>{name}</Title>
        <Text size="2rem">{`$${price}`}</Text>
        <Text>{description}</Text>
      </Grid.Col>
    </Grid>
  )
}
