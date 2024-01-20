import React from 'react';
import { ThreeDots } from 'react-loader-spinner';
import styles from "./loading.module.css"



const Loading = () => {
  return (
    <div className={styles.parent}>
      <ThreeDots
          height="150"
          width="150"
          radius="9"
          color="cyan"
          ariaLabel="loading"
      />
    </div>
     
  )
}

export default Loading
