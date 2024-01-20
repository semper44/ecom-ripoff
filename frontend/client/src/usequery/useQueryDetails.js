// import {useQuery, useQueryClient } from "react-query";


// // const fetcher=({queryKey})=>{
// //   const id=queryKey[1]
// //   return axios.get(`https://fakestoreapi.com/products/${id}`)
// // }

// function useQueryDetails(id, fetcher) {
//   const queryClient= useQueryClient()
//   return useQuery(["featured-details", id],
//   fetcher,{
//     initialData:()=>{
//         const feature= queryClient.getQueryData("featured")?.data?.find((item)=>item.id===parseInt(id))
//         const f= queryClient.getQueryData("featured")?.data?.filter((item)=>item.id!==parseInt(id))
//         console.log(feature)
//         if(feature && f){
//           return{data:feature, df:f}  
//         }else{
//           return undefined
//         }
//       }
//     }  
//   )
  
// }

// export default useQueryDetails