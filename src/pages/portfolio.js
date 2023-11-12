import Head from 'next/head'
import { portfolioData } from '@/data/portfolioData'
import PortfolioContent from '@/components/portfolio/portfolioContent'
import DashboardNavbar from '@/components/navbar/dashboardNavbar'

export default function Portfolio({ portfolioData }) {
  return (
    <>
      <Head>
        <title>InvestEazy - Portfolio</title>
        <meta name="description" content="Crowdfunding Accredited Investors for Investment Oppourtunities" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <DashboardNavbar />
      <PortfolioContent portfolioData={ portfolioData } />
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      portfolioData: portfolioData
    }
  }
}