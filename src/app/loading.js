import React from 'react'
import styles from './styles.module.css'

export const Loading = () => {
  return <div className={styles.loaderWrapper}><div className={styles.loader}></div></div>
}

export default Loading
