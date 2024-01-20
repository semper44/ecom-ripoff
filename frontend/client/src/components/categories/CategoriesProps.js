import React from 'react'
import styles from "./categoriesprops.module.css"



function CategoriesProp(props) {
  return (
    <div className={styles["container-main"]}>
      <div className={styles["container-main-two"]} style={{background:`url(${props.img})`,width:"330px",height:"280px", backgroundSize:"cover",backgroundPosition:"center", borderRadius:"10px", overflow:"hidden"}}>
          <div className={styles["text-area-category"]}>
              <h2>{props.category}</h2>
          </div>
        </div>
    </div>
  )
}

export default CategoriesProp