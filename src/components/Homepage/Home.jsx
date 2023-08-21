import React from 'react'
import Leftbar from './Leftbar'
import styles from "./Home.module.css"
import FeedPage from './FeedPage'

export default function Home() {


  return (
    <div className={styles.container}>
    <div className={styles.leftbar}>
      <Leftbar />
    </div>
    <div className={styles.headbar}>
      <FeedPage />
      <FeedPage />
      <FeedPage />
    </div>
  </div>
  )
}
