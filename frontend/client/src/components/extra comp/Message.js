import React, {useEffect} from 'react'
import styles from "./message.module.css"

function Message({value, code, fn}) {
  console.log(value, code,)
  useEffect(()=>{
    const interval=setInterval(()=>{
      console.log("hyr")
      fn(false)
      console.log("hy")
    }, 5000)      
    setTimeout(()=>clearInterval(interval), 6000)
  }, [fn])
  return (
    <>
    {code==="error" && <div className={code==="error"?styles.error:styles.success} id={styles["error-parent"]}>
       <p>Error:{value}</p>
    </div>}
    {code==="success" && <div className={code==="error"?styles.error:styles.success} id={styles["error-parent"]}>
       <p>Success:{value}</p>
    </div>}
    </>
  )
}

export default Message