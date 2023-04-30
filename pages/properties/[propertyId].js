import Head from "next/head";

import Navbar from "../../components/navbar";
import Description from "../../components/propertyDetails/description";
import PropertyNumbers from "../../components/propertyDetails/numbers";
import Details from "../../components/propertyDetails/details";
import Footer from "../../components/footer";
import { properties as fallback } from "../../data/data";
import { PropertyApi } from "../../api";

export default function PropertyDetails({ property }) {
  return (
    <>
      <Head>
        <title>InvestEazy - Property Details</title>
        <meta
          name="description"
          content="Crowdfunding Accredited Investors for Investment Oppourtunities"
        />
        <link rel="icon" href="/vercel.ico" />
      </Head>

      <Navbar />
      <Description propertyData={property} />
      <PropertyNumbers propertyData={property} />
      <Details propertyData={property} />
      <Footer />
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: { propertyId: "1" },
      },
      {
        params: { propertyId: "2" },
      },
      {
        params: { propertyId: "3" },
      },
    ],
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;

  const api = new PropertyApi();
  const properties = (await api.getAll()) || fallback;
  const property = properties.filter((p) => p.id == params.propertyId);

  return {
    props: {
      property: property[0],
    },
  };
}
