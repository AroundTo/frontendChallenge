import Head from 'next/head'

import { BackgroundPattern } from './Background'
import { BodyBox } from './BodyBox'
import { Footer } from './Footer'
import { Header } from './Header'
import { RouterTransition } from './RouterTransition'

export const Shell = ({
  children,
  title,
}: {
  children: React.ReactNode
  title?: string
}) => {
  return (
    <>
      <Head>
        <title>{`Around${title ? ` | ${title}` : ''}`}</title>
      </Head>

      <RouterTransition />
      <BackgroundPattern>
        <BodyBox>
          <Header />
          {children}
          <Footer />
        </BodyBox>
      </BackgroundPattern>
    </>
  )
}
