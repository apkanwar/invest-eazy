import Head from 'next/head'
// import { properties } from '../data/data'

import Navbar from '../components/navbar'
import MarketplaceContent from '../components/marketplaceContent'

export default function Marketplace() {
  return (
    <>
      <Head>
        <title>InvestEazy - Marketplace</title>
        <meta name="description" content="Crowdfunding Accredited Investors for Investment Oppourtunities" />
        <link rel="icon" href="/vercel.ico" />
      </Head>

      <Navbar login={true} />
      <MarketplaceContent/>
    </>
  )
}

// export async function getStaticProps() {
//   return {
//     props: {
//       properties: PropertyApi
//     }
//   }
// }