import PublicNavbar from "@/components/navbar/publicNavbar";
import PropertyDescription from "@/components/propertyInfo/description";
import { properties } from '@/data/data'

export default function PropertyInfo({ property }) {
  return (
    <>
      <PublicNavbar />
      <PropertyDescription propertyData={property} />
    </>
  )
}

export async function getStaticPaths() {
  const paths = properties.map((prop) => ({
    params: { id: prop.id },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps(context) {
  const { params } = context;
  const property = properties.filter(p => p.id == params.id)
  return {
    props: {
      property: property[0]
    }
  }
}