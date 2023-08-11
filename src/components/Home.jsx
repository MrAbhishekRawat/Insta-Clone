import React from 'react'
import Headbar from './Headbar'
import Leftbar from './Leftbar'
import styles from "./Home.module.css"

export default function Home() {


  return (
    <div className={styles.container}>
    <div className={styles.leftbar}>
      <Leftbar />
    </div>
    <div className={styles.headbar}>
      <Headbar />
    </div>
  </div>
  )
}
