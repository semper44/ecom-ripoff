import React,{useContext, useEffect, useState} from 'react'
import styles from "./cart.module.css" 
import CartPortal from './CartPortal'
import {cartContxt} from '../../stores/CartContxt';
import { AuthContext } from '../profiles/login/LoginFetch';
import jwt_decode from "jwt-decode"
import { useNavigate } from 'react-router-dom';
import { ThemeData } from '../../App';



function CartContainer(props) {
  const cartDisplay = useContext(cartContxt)
  const[cartCombined, setCartCombined]= useState({})

  const logIn= useContext(AuthContext)
  const navigate= useNavigate()

  const {theme}= useContext(ThemeData)

  const{addItemsToCart, removeItemsFromCart, removeItemsTotally}=cartDisplay
  const token= JSON.parse(window.localStorage.getItem("authToken"))|| null

  let lengthOfCart= cartDisplay?.items?.length<1

  let userDetails;
    if(logIn?.user){
      userDetails=jwt_decode(logIn?.user?.access)
    } 
  console.log(cartDisplay)

function clickToRemove(item){
  removeItemsFromCart({
    id:item.id,
    
  })

  
}
function clickToAdd(item){
  console.log(item.seller)
  addItemsToCart({
    id:item.id,
    category:item.category,
    image:item.image,
    price:item.price,
    // totalPrice:item.totalPrice,
    // seller:"semper",
    qty:0,
    
    })
    // addItemsToCart.seeSetDisplay(false)
}

function remove(item){
  removeItemsTotally({id:item.id,})
}

const {items, cartId}= cartDisplay
console.log(cartId)

useEffect(()=>{
  setCartCombined({items, cartId})
}, [cartId, items])

console.log(cartCombined)


function order(){
  if(!userDetails?.user_id){ 
    navigate("/login")
    props.onToglle()
    console.log("hy")
  }else{
    fetch("http://127.0.0.1:8000/product/placeorder/", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        'Authorization': 'Bearer '+ token?.access
        },      
        body:JSON.stringify(cartCombined)}
        )
    .then((res)=>{
      return res.json();
    })
    .then((result)=>{
      console.log(result)
      // console.log(result.link)
      // console.log(result.code)
      if(result.code===200){
        window.location.href=result.link
      }else{
        console.log(result.message)
      }
    })
    // .then(data=>{
      
    // })
    // window.location.href = "https://ravemodal-dev.herokuapp.com/v3/hosted/pay";
 
  }
}
console.log(items)
 
  return (
    <CartPortal>
      <div id={styles['modal-bg']}>
        <div className={theme?styles["child-elems-dark"]:styles["child-elems"]}>
          <div className={theme?styles["ribbon-dark"]:styles.ribbon}>
              <p>Item</p>
              <div className={styles["right-ribbon"]}>
                  <div className="div-p"><p>Quantity</p></div>
                  <div className="div-p3"><p>Price</p></div>
              </div>
          </div>
          {/* <div className={cartDisplay.seeDisplay ? styles["cart-items-container"]:styles["cart-items-container-show"]}> */}
          <div className={styles["cart-items-container-parent"]}>
          {lengthOfCart && <div className={styles['nothing-in-cart']}> <h3>Nothing added to the cart yet</h3></div>}
          {cartDisplay?.items?.map((item)=>{
            return( 
              <div className={styles["cart-items-adjusted-container-show"]}>
                <div className={styles["cart-container"]}>
                  <div className={styles["cart-image"]}>
                    <img src={item.image} alt="" />
                    <div className={styles["cart-category"]}> <p>{item.category} </p></div>
                  </div>
                  <div className={styles["cart-right-container"]}>
                    <div className={styles["minus-plus"]}>
                      <div className={styles.minus} ><p onClick={()=>{clickToRemove(item)}}>-</p></div>
                      <div className={styles["cart-qty"]}>{item.qty}</div>
                      <div className={styles.plus}><p onClick={()=>{clickToAdd(item)}}>+</p></div>
                    </div>
                    <div className={styles["price-and-cancel"]}>
                      <div className={styles["cart-price"]}>{`$${item.price*item.qty}`}</div>
                      <button className={styles.cancel} onClick={()=>{remove(item)}}>X</button>
                    </div>
                  </div>
                </div>
                </div>
            )})}
          </div>
          <div className={styles["footer-cart"]}>
            <div className={styles["cart-footer-up"]}>
              <p>Total Amount</p>
              <p id={styles.continueshopping} onClick={props.onToglle}>Continue shopping</p>
            </div>
            <div className={styles["continue-shopping"]}>
              <h2>$40.00</h2>
              <p className={styles.order} onClick={order}>Order Now</p>                  
            </div>
          </div>
        </div>
        </div>
    </CartPortal>  
    )
}

export default CartContainer