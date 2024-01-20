import React,{useEffect, useState}from 'react'
import {adminDataContext} from "./CartContxt"

const Addata= JSON.parse(window.localStorage.getItem("ADMIN"))|| ""
const{featured, category, promoDeals, users}= Addata
console.log(Addata)
let csFeatured= featured||0;
let cscategory= category||0;
let cspromoDeals= promoDeals||0;
let csusers= users||0;

const initialData={
    featured:csFeatured,
    category:cscategory,
    promoDeals:cspromoDeals,
    users:csusers,

}


function GeneralProviders(props) {
    const [adminData, setadminData]=useState(initialData) 
    
    useEffect(()=>{
        window.localStorage.setItem("ADMIN", JSON.stringify(adminData))
}, [adminData])
    return (
      
    <adminDataContext.Provider 
        value={{adminDataContextVal:adminData,adminDataContextFunc:setadminData}}>
        {props.children}
    </adminDataContext.Provider>
  )
}

export default GeneralProviders