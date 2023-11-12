import React, { useState } from "react"
import styles from '@/styles/settings/settingsLinks.module.css'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function Support() {
  return (
    <div className={styles.container}>
      <div className={styles.links}>
        <div className={styles.title}>
          Support
        </div>
        <div className={styles.link}>
          <span>
            Terms of Use
          </span>
          <div className={styles.linkArrow}>
            <ArrowForwardIcon />
          </div>
        </div>
        <div className={styles.link}>
          <span>
            FAQ
          </span>
          <div className={styles.linkArrow}>
            <ArrowForwardIcon />
          </div>
        </div>
        <div className={styles.link}>
          <span>
            Contact Us
          </span>
          <div className={styles.linkArrow}>
            <ArrowForwardIcon />
          </div>
        </div>
      </div>
    </div>
  )
}