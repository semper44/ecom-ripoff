import React from 'react'
import styles from "./categorysample.module.css"

function CategorySample(props) {
    return (
        <>
        {/* <div className={styles["category-parents"]}> */}
            <div className={styles["category-container-main"]}>
                <div className={styles["container-main-one"]}>
                    <div className={styles["container-main-one-c"]} style={{background:`url(${props.img})`,width:"300px",height:"300px", backgroundSize:"cover",backgroundPosition:"center", borderRadius:"10px", overflow:"hidden"}}></div>
                    <div className={styles["container-main-one-b"]} style={{background:`url(${props.img})`,width:"300px",height:"300px", backgroundSize:"cover",backgroundPosition:"center", borderRadius:"10px", overflow:"hidden"}}></div>
                </div>
                <div className={styles["container-main-two"]}>
                    <div className={styles["container-main-two-b"]} style={{background:`url(${props.img})`,width:"300px",height:"300px", backgroundSize:"cover",backgroundPosition:"center", borderRadius:"10px", overflow:"hidden"}}></div>
                    <div className={styles["container-main-two-c"]} style={{background:`url(${props.img})`,width:"300px",height:"300px", backgroundSize:"cover",backgroundPosition:"center", borderRadius:"10px", overflow:"hidden"}}></div>
                {/* </div> */}
        
                
            
            </div>
        </div>
        </>
      )
    }

export default CategorySample