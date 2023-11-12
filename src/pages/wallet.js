import Head from 'next/head'
import WalletBar from '@/components/wallet/wallet'
import { activityData } from '@/data/activityData'
import DashboardNavbar from '@/components/navbar/dashboardNavbar'

export default function Wallet({ activityData }) {
  return (
    <>
      <Head>
        <title>InvestEazy - Wallet</title>
        <meta name="description" content="Crowdfunding Accredited Investors for Investment Oppourtunities" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <DashboardNavbar />
      <WalletBar activityData={ activityData } />
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      activityData: activityData
    }
  }
}