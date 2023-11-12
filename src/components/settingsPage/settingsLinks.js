import React, { useState } from "react"
import styles from '@/styles/settings/settingsLinks.module.css'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function SettingsLinks() {
  return (
    <div className={styles.container}>
      <div className={styles.links}>
        <div className={styles.title}>
          Personal Info

        </div>
        <div className={styles.link}>
          <span>
            Confidentiality Agreement
          </span>
          <div className={styles.linkArrow}>
            <ArrowForwardIcon />
          </div>
        </div>
        <div className={styles.link}>
          <span>
            Sustainibility Questionaire
          </span>
          <div className={styles.linkArrow}>
            <ArrowForwardIcon />
          </div>
        </div>
        <div className={styles.link}>
          <span>
            Join our Mailing List
          </span>
          <div className={styles.linkArrow}>
            <ArrowForwardIcon />
          </div>
        </div>
      </div>
    </div>
  )
}