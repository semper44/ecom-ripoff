import React, {useContext, useEffect} from 'react'
// import styles from "./featureddetails.module.css"
import {useParams } from 'react-router-dom'
import Loading from '../extra comp/Loading';
import { Link } from 'react-router-dom';
import { useState } from 'react'
import ButtonAdd from '../extra comp/ButtonAdd';
import ButtonDelete from '../extra comp/ButtonDelete';
import styles from "./productfromcategories.module.css"
import { ThemeData } from '../../App';
import useFetchProductDetails from '../../usequery/useFetchProductDetails';
import ShareOutlinedIcon from  '@mui/icons-material/ShareOutlined';
import SocialMediaShare from '../extra comp/social/SocialMediaShares';




function ProductDetails() {
    const[share, setShare]=useState(false)
    const {id}= useParams()
    let url= `http://127.0.0.1:8000/product/listproductdetails/${id}/`
    let urls2= "http://127.0.0.1:8000/product/allproducts/electronics/"
  const{data, error, productDetails, loading}=useFetchProductDetails(url, urls2)
  console.log(data)
  console.log(error)
  console.log(loading)
  // const[localdata, setLocaldata]= useState( parseddataLocalStorage?.data)
//   const {addItemsToCart, removeItemsFromCart}=useContext(cartContxt)
  const convertedId= Number(id)
  
  function toggleShare(){
    setShare((prev)=> !prev)
  }
 
  const {theme}= useContext(ThemeData)

  
  return (
    <>
        {error && <h1 id={styles.errors}>{error}</h1> }
        {!loading ?<div id={styles["container-parent"]} className={theme?styles.id:undefined}>
            {productDetails && productDetails.map((item)=>{
                return(
                <div className={styles["featured-details-parent"]}>
                    <div className={styles["featured-details-image"]}>
                    <img src={item.image} alt="" />
                    </div>
                    <div className={styles["product-details"]}>
                    <h1>{item.category}</h1>
                    <p>{item.description}</p>
                    <h2>{item.price}</h2>
                    <h3> ADD TO CART </h3>
                    </div>
                </div>)
                })}     
            <div className={styles['pre-link-text']}>
            {data&&<h1>Related<span>Products</span></h1>}
            </div>
            <div id={styles["related-products-parents"]} className={theme?styles.id:undefined}>
            {data?data.map((item)=>{
            return(
                <div className={styles.holder} key={item.id}>
                <Link to={`/productdetails/${item.id}`}>
                  <div className={styles["related-products-image"]}>
                    <img src={item.image} alt={item.description} />
                  </div>
                </Link>
                  <div className={styles["related-products-others"]}>
                    <div className="minus-plus" id={styles["minus-plus"]}>
                      <ButtonAdd item={item}/>
                      <div className="share" onClick={toggleShare}>
                        <ShareOutlinedIcon />
                        {share && <div className="socialmediashare">
                          <SocialMediaShare />
                        </div>}
                      </div>
                      <ButtonDelete  item={item}/>
                     
                    </div>
                      <h4 id={styles["p-category"]}>{item.category}</h4>
                      {/* <p>{props.description}</p> */}
                      <h2 id={styles["h2-price"]}>{item.price}</h2>
                      <p>{item.tittle}</p>
                  </div>
                
              </div>
            )}
            ):undefined}
            </div>
        </div>: <Loading />}    
    </>
  )
}

export default ProductDetails