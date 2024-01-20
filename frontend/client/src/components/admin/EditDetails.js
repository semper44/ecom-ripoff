// import React,{ useState, useEffect } from 'react'
// import {useParams} from 'react-router-dom'

// function EditDetails() {
//     const[productDetails, setproductDetails]= useState()
//     const {id}= useParams()
//     const token= JSON.parse(window.localStorage.getItem("authToken"))|| null
//     console.log(token)
//     console.log(token.access)

//     useEffect(()=>{
//         editdetails()
//     }, [])

//     const editdetails= async()=>{
//         let response= await fetch(`http://127.0.0.1:8000/product/editproduct/detail/${id}`,
//         {method:'GET',
//         headers:{
//         'Content-Type':'application/json',
//         'Authorization': 'Bearer '+ token.access
//         }})
//         let data = await response.json()
//         setproductDetails(data)
//         console.log(data)
//   }
//   return (
//     <div>EditDetails</div>
//   )
// }

// export default EditDetails