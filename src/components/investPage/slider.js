import React from "react";
import styles from "@/styles/investments.module.css"
import Carousel from "./carousel";

export default function Slider(properties) {
  return (
    <div className="flex  flex-col py-12 px-8 gap-8 lg:p-36 lg:gap-36">
      <Carousel title="New Listings" content={ properties.data } />
      <Carousel title="All Properties" content={ properties.data } />
    </div>
  );
}