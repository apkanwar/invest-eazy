import React, { useState } from "react"
import styles from '@/styles/settings/settingsLinks.module.css'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function ModifyAccount() {
  return (
    <div className={styles.container}>
      <div className={styles.links}>
        <div className={styles.title}>
          Account
        </div>
        <div className={styles.link}>
          <span>
            Reset Password
          </span>
        </div>
        <div className={styles.linkDelete}>
          <span>
            Delete Account
          </span>
        </div>
        <div className={styles.linkLogout}>
          <span>
            Log out
          </span>
        </div>
      </div>
    </div>
  )
}