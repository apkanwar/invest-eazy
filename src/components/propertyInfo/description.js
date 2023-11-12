import { useEffect, useState } from 'react';
import { Carousel, IconButton } from "@material-tailwind/react";
import { Progress, Typography } from "@material-tailwind/react";
import { Tabs, TabsHeader, TabsBody, Tab, TabPanel } from "@material-tailwind/react";
import styles from '@/styles/description.module.css'
import Image from 'next/image'

export default function PropertyDescription({ propertyData = [] }) {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div>
      <div className="bg-white text-custom-black dark:text-white font-headings pt-4">
        <div className="mx-auto flex max-w-7xl pt-6 px-6 lg:px-8">
          <div className={styles.imageBox}>
            <Carousel className='rounded-xl'
              navigation={({ setActiveIndex, activeIndex, length }) => (
                <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                  {new Array(length).fill("").map((_, i) => (
                    <span
                      key={i}
                      className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "w-8 bg-custom-black" : "w-4 bg-eazy-main-50"
                        }`}
                      onClick={() => setActiveIndex(i)}
                    />
                  ))}
                </div>
              )}

              prevArrow={({ handlePrev }) => (
                <IconButton
                  variant="text"
                  color="white"
                  size="lg"
                  onClick={handlePrev}
                  className="!absolute bottom-0 left-4 -translate-y-2/4 bg-eazy-main-75 hover:bg-eazy-main-100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                    />
                  </svg>
                </IconButton>
              )}
              nextArrow={({ handleNext }) => (
                <IconButton
                  variant="text"
                  color="white"
                  size="lg"
                  onClick={handleNext}
                  className="!absolute bottom-0 !right-4 -translate-y-2/4 bg-eazy-main-75 hover:bg-eazy-main-100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </IconButton>
              )}
            >
              {propertyData.images.map(imageFile => {
                return (
                  <Image key={imageFile} src={`/properties/${imageFile}`} height={560} width={560} alt="propertyImage" priority={true} />
                )
              })}
            </Carousel>
          </div>

          <div className={styles.info}>
            <h3 className="text-xl font-semibold mb-5 cursor-pointer">&#8592; &emsp; Back to All Properties</h3>
            <h2 className="text-4xl font-medium m-0">{propertyData.name}</h2>
            <h3 className="text-2xl font-medium text-custom-lightgray dark:text-gray-400 mt-1">{propertyData.address}</h3>

            <div className="rounded-md mt-9 px-8 py-3 inline-flex items-center justify-center bg-custom-black text-white">
              <h3 className="text-2xl font-medium mt-1">{propertyData.type}</h3>
            </div>

            <div className="flex flex-row justify-between">
              <div className="w-[210px] py-8 px-4 mt-11 text-center rounded-md border border-custom-black">
                <h4 className="text-eazy-main-100 text-xl font-semibold">Purchase Price</h4>
                <h4 className="text-2xl mt-5 font-semibold">${propertyData.purchasePrice}</h4>
              </div>

              <div className="w-[210px] py-8 px-4 mt-11 text-center rounded-md border border-custom-black">
                <h4 className="text-eazy-main-100 text-xl font-semibold">Project Term</h4>
                <h4 className="text-2xl mt-5 font-semibold">${propertyData.projectTerm} years</h4>
              </div>

              <div className="w-[210px] py-8 px-4 mt-11 text-center rounded-md border border-custom-black">
                <h4 className="text-eazy-main-100 text-xl font-semibold">Estimated ROI</h4>
                <h4 className="text-2xl mt-5 font-semibold">${propertyData.estimatedROI}%</h4>
              </div>
            </div>

            <div className="font-medium text-sm my-8">
              <p>
                Capital At Risk - Please read Key Risks and Purchaser's Rights before investing.
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto flex flex-col max-w-7xl px-6 lg:px-8 items-center">
          <div className="w-full">
            <div className="mb-2 flex items-center justify-between gap-4">
              <Typography color="blue-gray" variant="h6">
                Goal
              </Typography>
              <Typography color="blue" variant="h6">
                {propertyData.investmentGained / propertyData.investmentNeeded * 100}%
              </Typography>
            </div>
            <Progress value={propertyData.investmentGained / propertyData.investmentNeeded * 100} color='blue' />
          </div>

          <div className="font-medium text-xl my-8">
            <button className="px-11 py-4 rounded-full
                               bg-eazy-main-100 hover:bg-eazy-main-90 hover:text-midnight-black 
                               dark:bg-eazy-main-90 dark:hover:text-white
                               text-white dark:text-midnight-black transition ease-in duration-200">
              Invest
            </button>
          </div>
        </div >
      </div>
      
      <div className="text-custom-black">
        <Tabs value={activeTab}>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <TabsHeader
              className="rounded-none bg-transparent p-0"
              indicatorProps={{ className: "shadow-none rounded-none" }}
            >
              {propertyData.details.map(({ label, value }) => (
                <Tab
                  key={value}
                  value={value}
                  onClick={() => setActiveTab(value)}
                  className="py-6 text-2xl font-semibold font-headings"
                >
                  {label}
                </Tab>
              ))}
            </TabsHeader>
          </div>
          <div className="bg-white">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <TabsBody className="bg-white">
                {propertyData.details.map(({ value, desc }) => (
                  <TabPanel key={value} value={value}>
                    {desc}
                  </TabPanel>
                ))}
              </TabsBody>
            </div>
          </div>
        </Tabs>
      </div>
    </div >
  )
}