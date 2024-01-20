import React from 'react'
import styles from "./footer.module.css"

function Footer() {
  return (
    <>
    <div className={styles.footer}>
      <div className={styles["logo-sub"]}>
        <div className={styles.logo}>logo</div>
        <div className={styles.subscribe}>
          <h4>love our products?</h4>
          <p>subscribe to our newsletter to get updates on our latest offer</p>
          <input type="email" name="" id="" placeholder='Enter Email Address' />
          <input type="submit" id="submit" />
        </div>
      </div>
      <div className={styles["footer-bottom"]}>
        <div className={styles.container}>
          <div className={styles.help}>
            <h2>Need help?</h2>
            <p>Help center</p>
            <p>Contact us</p>
            <p>How to shop on our site</p>
            <p>Return policies</p>
            <p>Return policies</p>
            <p>Return policies</p>
            <p>Return policies</p>
            <p>Return policies</p>
            <p>Report a product/seller</p>
          </div>
          <div className={styles['money-download']}>
            <div className={styles["money-with-us"]}>
              <h2>Want to make money too?</h2>
              <p>Sell on our site</p>
              <p>Become a sales consultant </p>
              <p>Become a delivering agent</p>
            </div>
            <div className={styles["download-app"]}>
              <h2>DOWNLOAD OUR FREE APP</h2>
              <p>Get access to discounted offers!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default React.memo(Footer)