import { Shell } from '@/src/components/layout/Shell'
import { Container } from '@mantine/core'
import { AboutMe } from './AboutMe'
import { AboutThisProject } from './AboutThisProject'

export const IndexPage = () => {
  return (
    <Shell>
      <Container my={40}>
        <AboutMe />
        <AboutThisProject />
      </Container>
    </Shell>
  )
}
