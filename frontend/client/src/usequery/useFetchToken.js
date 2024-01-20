import {useEffect, useState} from 'react'

function useFetchToken(url, method) {
    const[data, setData]=useState()
    const[error, setError]=useState(null)
    const[loading, setLoading]=useState(true)
    const[msgFn, setMsgFn]=useState(false)

    const token= JSON.parse(window.localStorage.getItem("authToken"))|| null
    console.log(data)
    // let response= await fetch(`http://127.0.0.1:8000/product/editproduct/${id}`,

   useEffect(()=>{
        fetch(url,
        {method:method,
        headers:{
        'Content-Type':'application/json',
        'Authorization': 'Bearer '+ token.access
        }})
        .then((response)=>{
            if(!response.ok){
                throw Error("Couldn't fetch data, please retry")
            }
            if (response.status===200){
                setLoading(false)
            }
            if (response.status !==200){
                setMsgFn(true)
            }
            
            return response.json()
        })
        .then((data)=>{
            console.log(data)
            setData(data)
        })
        .catch(err=>{
            setLoading(false)
            setError(err.message)
            setMsgFn(true)
        })  
    }, [method, token.access, url] ) 
    
    return {loading, error, data, setMsgFn, msgFn} 
}

export default useFetchToken


// let response= await fetch(`http://127.0.0.1:8000/product/editproduct/${id}`,
 



