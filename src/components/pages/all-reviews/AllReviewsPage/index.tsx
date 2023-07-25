import { Shell } from '@/src/components/layout/Shell'
import { Container, Divider, Title } from '@mantine/core'
import { ReviewsContainer } from './ReviewsContainer'

export const AllReviewsPage = () => {
  return (
    <Shell title="Reviews">
      <Container>
        <Title>{'All reviews'}</Title>
        <Divider />
        <ReviewsContainer />
      </Container>
    </Shell>
  )
}
