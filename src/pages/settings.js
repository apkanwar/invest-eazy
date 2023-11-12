import Head from 'next/head'
import PersonalInfo from '@/components/settingsPage/personalInfo'
import SettingsLinks from '@/components/settingsPage/settingsLinks'
import Support from '@/components/settingsPage/support'
import ModifyAccount from '@/components/settingsPage/modifyAccount'
import DashboardNavbar from '@/components/navbar/dashboardNavbar'

export default function Settings() {
  return (
    <>
      <Head>
        <title>InvestEazy - Settings</title>
        <meta name="description" content="Crowdfunding Accredited Investors for Investment Oppourtunities" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <DashboardNavbar />
      <PersonalInfo />
      <SettingsLinks />
      <Support />
      <ModifyAccount />
    </>
  )
}
