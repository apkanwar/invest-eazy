import Head from "next/head";

import Navbar from "../components/navbar";
import HomeBanner from "../components/homePage/banner";
import Description from "../components/homePage/image_left";
import OurNumbers from "../components/homePage/our_numbers";
import PropertyGrid from "../components/homePage/property_grid";
import HowItWorks from "../components/homePage/full_card";
import Footer from "../components/footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>InvestEazy</title>
        <meta
          name="description"
          content="Crowdfunding Accredited Investors for Investment Oppourtunities"
        />
        <link rel="icon" href="/vercel.ico" />
      </Head>

      <Navbar login={false} />
      <HomeBanner />
      <Description />
      <OurNumbers />
      <PropertyGrid />
      <HowItWorks />
      <Footer />
    </>
  );
}
