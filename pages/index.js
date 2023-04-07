import Head from 'next/head'
import styles from '../styles/pages.module.css'
// import PropertyApi from '../api'
import { useEffect } from 'react'

import Navbar from '../components/navbar'
import HomeBanner from '../components/homePage/banner'
import Description from '../components/homePage/image_left'
import OurNumbers from '../components/homePage/our_numbers'
import PropertyGrid from '../components/homePage/property_grid'
import HowItWorks from '../components/homePage/full_card'
import Footer from '../components/footer'

export default function Home() {
  useEffect(() => {
    const api = new PropertyApi();
    api.getAll().then(listings => {
      console.log(listings);
    });
  }, []);

  return (
    <>
      <Head>
        <title>InvestEazy</title>
        <meta name="description" content="Crowdfunding Accredited Investors for Investment Oppourtunities" />
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
  )
}

class BaseApi {
  constructor(baseUrl, token) {
    this.baseUrl = 'https://invest-easy-backend.herokuapp.com/api';
    // this.token = token;
  }

  async request(method, url, body) {
    const response = await fetch(`${this.baseUrl}${url}`, {
      method,
      // headers: {
      //   'Content-Type': 'application/json',
      //   'Authorization': `Bearer ${this.token}`
      // },
      body: body ? JSON.stringify(body) : undefined
    });
    const data = await response.json();
    return data;
  }
}

class PropertyApi extends BaseApi {
  async getAll() {
    return this.request('GET', '/property/get_listings');
  }
}