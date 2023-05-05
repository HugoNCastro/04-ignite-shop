import { globalStyles } from '@/styles/global'
import type { AppProps } from 'next/app'
import { Roboto } from 'next/font/google'
import logoImg from '../assets/logo.svg'
import { Container, Header } from '@/styles/pages/app'

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={roboto.className}>
      <Container>
        <Header>
          <img src={logoImg.src} alt="" />
        </Header>
      </Container>
      <Component {...pageProps} />
    </main>
  )
}
