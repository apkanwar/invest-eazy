import IHeader from "@/components/investPage/header"
import Slider from "@/components/investPage/slider"
import Footer from "@/components/footer"
import { properties } from '@/data/data'
import PublicNavbar from "@/components/navbar/publicNavbar"

export default function Home({ properties }) {
  return (
    <>
      <PublicNavbar />
      <IHeader />
      <Slider data={properties} />
      <Footer />
    </>
  )
}

export async function getStaticProps() {
  // const response = await fetch('http://localhost:4000/properties')
  // const data = await response.json();
  return {
    props: {
      properties: properties
    }
  }
}