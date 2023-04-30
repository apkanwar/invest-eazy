import Head from "next/head";
import { properties as fallback } from "../data/data";
import { PropertyApi } from "../api";

import Navbar from "../components/navbar";
import MarketplaceContent from "../components/marketplaceContent";

export default function Marketplace({ properties }) {
  return (
    <>
      <Head>
        <title>InvestEazy - Marketplace</title>
        <meta
          name="description"
          content="Crowdfunding Accredited Investors for Investment Oppourtunities"
        />
        <link rel="icon" href="/vercel.ico" />
      </Head>

      <Navbar login={true} />
      <MarketplaceContent data={properties} />
    </>
  );
}

export async function getStaticProps() {
  // const response = await fetch('http://localhost:4000/properties')
  // const data = await response.json();
  const api = new PropertyApi();
  const properties = (await api.getAll()) || fallback;

  return {
    props: {
      properties: properties,
    },
  };
}
