import Head from 'next/head'
import PublicNavbar from '@/components/navbar/publicNavbar'
import LoginDetails from '@/components/login/loginDetails'
import Footer from '@/components/footer'

export default function Login() {
  return (
    <>
      <Head>
        <title>InvestEazy - Login</title>
        <meta name="description" content="Crowdfunding Accredited Investors for Investment Oppourtunities" />
      </Head>
      
      <PublicNavbar />
      <LoginDetails />
      <Footer />
    </>
  )
}
