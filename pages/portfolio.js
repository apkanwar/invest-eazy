import Head from 'next/head'
// import { portfolioData } from '../data/portfolioData'

import Navbar from '../components/navbar'
import PortfolioContent from '../components/portfolioContent'

export default function Portfolio() {
  return (
    <>
      <Head>
        <title>InvestEazy - Portfolio</title>
        <meta name="description" content="Crowdfunding Accredited Investors for Investment Oppourtunities" />
        <link rel="icon" href="/vercel.ico" />
      </Head>

      <Navbar login={true} />
      <PortfolioContent />
    </>
  )
}

// export async function getStaticProps() {
//   return {
//     props: {
//       portfolioData: portfolioData
//     }
//   }
// }