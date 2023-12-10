import styles from './styles.module.css'
import Head from './head'
import Header from '../components/Header'
import Footer from '../components/Footer'

import '../../styles/global.css'

import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className={inter.className}>
      <Head/>
      <body className={styles.container}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}