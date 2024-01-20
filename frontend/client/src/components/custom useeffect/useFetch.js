// import React, {useEffect, useState} from 'react'


// const useFetch=(url)=>{
//     const [data, setdata]=useState(null)
//     const [isLoading, setIsLoading]=useState(true)  
//     const {isLoadingContextVal, isLoadingContextFunc}= useContext(isLoadingContext)
//     console.log(isLoadingContextVal)

    
//     useEffect(()=>{
//     const setLoading=isLoadingConst.isLoadingContextFunc
//     fetch(url)
//         .then(res =>{
//             if(!res.ok){
//                 throw Error('could not fetch the data for that resource')
//             }
//         return res.json();
//         })
//         .then(data => {
//         setdata(data);
//         setIsLoading(false)
//         });
//         //eslint-disable-next-line react-hooks/exhaustive-deps
//     }, [url]);
//     return {data, isLoading}
// }

// export default useFetch



