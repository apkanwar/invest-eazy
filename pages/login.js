import Head from 'next/head'
import styles from '../styles/pages.module.css'

import Navbar from '../components/navbar'
import LoginDetails from '../components/loginDetails'
import Footer from '../components/footer'

export default function Login() {
  return (
    <>
      <Head>
        <title>InvestEazy - Login</title>
        <meta name="description" content="Crowdfunding Accredited Investors for Investment Oppourtunities" />
        <link rel="icon" href="/vercel.ico" />
      </Head>

      <Navbar login={false} />
      <LoginDetails />
      <Footer />
    </>
  )
}
