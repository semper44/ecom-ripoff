// import React, {useEffect, useState} from 'react'

// function useTokenFetch(url, method) {
//     const[data, setData]=useState()
//     const[error, setError]=useState(null)
//     const[loading, setLoading]=useState(true)

//     const token= JSON.parse(window.localStorage.getItem("authToken"))|| null

//     // let response= await fetch(`http://127.0.0.1:8000/product/editproduct/${id}`,
//    function fetchData(url, method){
//         fetch(url,
//         {method:method,
//         headers:{
//         'Content-Type':'application/json',
//         'Authorization': 'Bearer '+ token.access
//         }})
//         .then((response)=>{
//             if(!response.ok){
//                 throw Error("Couldn't fetch data, please retry")
//             }
//             if (response.status===200){
//                 setLoading(false)
//             }
//             return response.json()
//         })
//     .then(()=>{
//         setData(data)
//     })
//     .catch(err=>{
//         setLoading(false)
//         setError(err.message)
//     })  
//     return {loading, error, data} 
//  }  

// }

// export default useTokenFetch


// let response= await fetch(`http://127.0.0.1:8000/product/editproduct/${id}`,
export const fetchData =(url, method)=>{
    let loading=true
    let error=null
    let data;
    let stat
    console.log("tired")
       const token= JSON.parse(window.localStorage.getItem("authToken"))|| null
        fetch(url,
        {method:method,
        headers:{
        'Content-Type':'application/json',
        'Authorization': 'Bearer '+ token.access
        }})
        .then((response)=>{
            stat= response
            if(!response.ok){
                throw Error("Couldn't fetch data, please retry")
            }
            if (response.status===200){
                loading=false
                console.log("po")
                window.location.reload()
            }
            return response.json()
        })
        .then((res)=>{
            data=res
        })
        .catch(err=>{
            loading=false
            error=err.message
        })  
        return {loading, error, data, stat} 
 }  



