import { useState, useEffect} from 'react'


function useFetch(url, requestOptions) {
    const[data, setData]=useState()    
    const[loading, setLoading]=useState(true)    
    const[error, setError]=useState(null)    

    useEffect(()=>{
        // let requestOptions = {
        //     method: 'GET',
        //     redirect: 'follow'
        // };
        
        fetch(url, requestOptions)
            .then(res=>{
                if(!res.ok){
                    throw Error("Couldn't fetch data, please retry")
                }
                if (res.status===200){
                    setLoading(false)
                }
                return res.json()
            })
            .then(response => {
                    setData(response)
                    console.log(response)
                    
                    setError(null)
                    console.log(response)
                    console.log("response")
                

                    
                }
            )
            .catch(err=>{
                setLoading(false)
                setError(err.message)
            })   
    }, [url]);
    
    console.log(loading)

  return {data, loading, error} 
}

export default useFetch