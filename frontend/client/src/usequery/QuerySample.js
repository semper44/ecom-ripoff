// import { useState } from "react"
// import {useQuery} from "react-query"
// import axios from "axios"
// // import React from 'react'

// const fetcher=(pageNumber)=>{
//     return axios.get(`https://fakestoreapi.com/products?_limit=10&_page=${pageNumber}`)
//   }

// function QuerySample(fetcher) {
//   const[pageNumber,setPageNumber]= useState(1)
//   return useQuery(
//     ["featured", pageNumber],
//     ()=> fetcher(pageNumber),
//     {
//         refetchInterval:70000,
//         refetchIntervalInBackground:true,
//         refetchOnWindowFocus:true,
//         cacheTime:8000
//     }

//   )
// }
// export default QuerySample
 