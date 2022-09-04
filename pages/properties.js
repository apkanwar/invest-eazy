import Head from 'next/head'

import BannerNav from '../components/banner_nav'
import AllProperties from '../components/all_properties'
import Footer from '../components/footer'

export default function Properties() {
  return (
    <>
      <Head>
        <title>InvestEazy - Properties</title>
        <meta name="description" content="Crowdfunding Accredited Investors for Investment Oppourtunities" />
        <link rel="icon" href="/vercel.ico" />
      </Head>

      <BannerNav />
      <AllProperties />
      <Footer />
    </>
  )
}