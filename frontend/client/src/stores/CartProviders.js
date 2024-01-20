import React, {useReducer, useState} from 'react'
// import { useCallback } from 'react';
import { useEffect } from 'react';
import {cartContxt} from "./CartContxt"

const data= window.localStorage.getItem("MY_CARTSTATE")
let cartS;
let cartId;
let localItemData;


if(typeof(data) === "undefined" || data === null){
  cartS=0;
  cartId=null
  localItemData=[];
}else{
    const{cartSize, items:item, cartId:cartIds}=JSON.parse(data)
    localItemData=item
    cartS=cartSize
    cartId=cartIds
    console.log(item, cartS)
  
}
console.log(cartS)
console.log(localItemData)

const inistialState={
    cartSize:cartS,
    cartId:cartId,
    // qty:1,
    // totalPrice:0,
    items:localItemData,
}

function reduce(state, action){
  console.log(state)
  console.log(action.type)
  if(action.type==="ADD"){
    console.log(state)
    console.log(state.cartSize)
    let existingCartItemIndex;
    let existingCartItem;
    let sizeofcart;
    let updatedItems;
    if(state.items !== undefined){
      existingCartItemIndex = state.items.findIndex((item)=>item.id===action.item.id)
      existingCartItem = state.items[existingCartItemIndex]
    }
    if(existingCartItem){
      const updatedItem={...existingCartItem, qty:existingCartItem?.qty+1}
      // console.log(itemQty)
      updatedItems=[...state.items]
      updatedItems[existingCartItemIndex]=updatedItem;
      sizeofcart=state.cartSize++
      }
      else{
        const updatedAction= {...action.item, qty:action.item.qty+1}
        updatedItems= state?.items?.concat(updatedAction)
        sizeofcart=state.cartSize+updatedAction.qty
      }
    return {
      ...state,
      // totalAmount:updatedPrice,
      cartSize:sizeofcart,
      items:updatedItems
    }
    
    
  }

  console.log(state)
  if(action.type==="REMOVE"){
    let updatedItems;
    let sizeofcart;
    let existingCartItemIndex;
    let existingCartItem;
    // console.log(action.id.id)

    if(state.items.length>=1){
      existingCartItemIndex= state.items.findIndex((item)=>item.id===action.id.id)
      existingCartItem= state.items[existingCartItemIndex]
      console.log(existingCartItem?.qty)


      if(existingCartItem?.qty<=1){
        updatedItems= state.items.filter((item)=>item.id !== action.id.id)
        console.log(existingCartItem?.qty)
        sizeofcart=state.cartSize-existingCartItem?.qty
        console.log(state.cartSize)
        }
      else if(existingCartItem?.qty>1){
        const updatedItem={...existingCartItem, qty:existingCartItem?.qty-1}
        updatedItems=[...state.items]
        updatedItems[existingCartItemIndex]=updatedItem;
        sizeofcart=state.cartSize--
      }
      else{
        updatedItems=[...state.items]
        sizeofcart=state.cartSize
        console.log(existingCartItem?.qty)
  
      }
      return{
        ...state,
        cartSize:sizeofcart,
        items:updatedItems
      }
    }else{
      return {...state}
    }

    
    // const removeAction = {...filteredItem}
  }

  if(action.type==="TOTALREMOVE"){
    const existingCartItemIndex= state?.items.findIndex((item)=>item.id===action.id.id)
    const existingCartItem= state?.items[existingCartItemIndex]
    const existingCartItemQty= existingCartItem.qty
    console.log(existingCartItemQty)
    const updatedItems= state?.items.filter((item)=>item.id !== action.id.id)
    const sizeofcart=state?.cartSize-existingCartItemQty    
    return{
      ...state,
      cartSize:sizeofcart,
      items:updatedItems
    }

  }

  if(action.type==="RESETSTATE"){
    return{
      cartSize:0,
      item:[],
      cartId:null,
    }
  }
  return inistialState

  

}

function CartProviders(props) {
  const [displayNothing, setDisplayNothing]=useState(false)

  const [cartState, dispatch]=useReducer(reduce,inistialState)
  

  console.log(cartState)

  useEffect(()=>{
    if(cartState.cartSize>=1){
    window.localStorage.setItem("MY_CARTSTATE", JSON.stringify(cartState))
  }}, [cartState])

  const addItems=(item)=>{
    const action={type:"ADD", item:item}
    dispatch(action)
  }
  const removeItems=(id)=>{
    const action={type:"REMOVE", id:id}
    dispatch(action)
  }

  const totalRemove=(id)=>{
    const action={type:"TOTALREMOVE", id:id}
    dispatch(action)
  }  
  const cartReset=(id)=>{
    const action={type:"RESETSTATE"}
    dispatch(action)
  }  
  const cartValue={
    totalPrice:cartState.totalPrice,
    cartId:cartState.cartId,
    // qty:cartState.qty,
    // totalAmount:cartState.totalAmount,
    cartSize:cartState.cartSize,
    items:cartState.items,
    addItemsToCart: addItems,
    removeItemsFromCart: removeItems,
    removeItemsTotally: totalRemove,
    seeDisplay:displayNothing,
    seeSetDisplay:setDisplayNothing,
    cartReset:cartReset
    
    
};

  return (
    <cartContxt.Provider value={cartValue}>
        {props.children}
    </cartContxt.Provider>
  )
}

export default React.memo(CartProviders)