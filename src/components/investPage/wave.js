import Image from "next/image";
import React from "react";
import styles from "@/styles/investments.module.css"

export default function Wave() {
  return (
    <div className={styles.waveContainer}>
      {/* Image */}
      <Image src={require("../../../public/Wave.png")} priority={true} alt="blue_wave" className={styles.waveImage}/>
      
      <a href="#listings" className={styles.viewPropertiesButton}>
        View Properties
      </a>
    </div>
  );
}