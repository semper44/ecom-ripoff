import {useEffect, useState} from "react"




function useAuthFetch(url, method) {
    const[data, setData]= useState()
    let token
    useEffect(()=>{
      token= JSON.parse(window.localStorage.getItem("authToken"))|| null

    }, [])
    useEffect(()=>{
  
        editProduct()
      }, [])
      
    const editProduct= async ()=>{
    let response= await fetch(url,
    {method:method,
    headers:{
        'Content-Type':'application/json',
        'Authorization': 'Bearer '+ token?.access
    }})
    let datum = await response.json()
    setData(datum)
    }
    console.log(token)
  return {data}
   
  
}

export default useAuthFetch
