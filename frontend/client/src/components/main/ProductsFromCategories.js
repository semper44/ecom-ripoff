import React, { useContext, useState} from 'react'
import { Link } from 'react-router-dom';
// import {cartContxt} from '../../stores/CartContxt';
import ButtonAdd from '../extra comp/ButtonAdd';
import ButtonDelete from '../extra comp/ButtonDelete';
import styles from "./productfromcategories.module.css"
import Loading from "../extra comp/Loading"
import { ThemeData } from '../../App';
// import { promoData } from '../../stores/CartContxt';
import useFetch from '../../usequery/useFetch';
import ShareOutlinedIcon from  '@mui/icons-material/ShareOutlined';
import SocialMediaShare from '../extra comp/social/SocialMediaShares';

function ProductFromCategories({sellers, url}) { 
  const[share, setShare]=useState(false)
  const {theme}= useContext(ThemeData)
//   const {promoloading, promodata}= useContext(promoData)
  const {data, loading, error}= useFetch(url)

  console.log(data)

  function toggleShare(){
    setShare((prev)=> !prev)
  }

  return (
    <>
    {error && <h1 id={styles.errors}>{error}</h1> }
  {!loading ?<div id={styles["related-products-parents"]} className={theme?styles.id:undefined}>
   {data?.map((item)=>{
  return(
      <>
      <div className={theme? styles["holder-dark"]:styles.holder} key={item.id}>
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
              <h2 id={theme?styles["h2-price-dark"]:styles["h2-price"]}>{item.price}</h2>
              <p>{item.tittle}</p>
          </div>
        
      </div>
       
      </>


  );
  })}
   </div>: <Loading />}
    </>
    )
}

export default ProductFromCategories