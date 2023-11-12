import Cover from "@/components/homePage/cover"
import HowItWorks from "@/components/homePage/howItWorks"
import AboutUs from "@/components/homePage/aboutUs"
import AutomatedInfo from "@/components/homePage/automatedInfo"
import Footer from "@/components/footer"
import PublicNavbar from "@/components/navbar/publicNavbar"

export default function Home() {
  return (
    <>
      <PublicNavbar />
      <Cover />
      <HowItWorks />
      <AboutUs />
      <AutomatedInfo />
      <Footer />
    </>
  )
}