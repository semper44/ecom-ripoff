// import React, { useState, useEffect} from 'react'
// import { headerdata } from './CartContxt'

// function ProductNotification(props) {
//     const[data, setData]=useState()
    
//     const token= JSON.parse(window.localStorage.getItem("authToken"))|| null


//     useEffect(()=>{
//       let requestOptions = {
//         method: 'GET',
//         redirect: 'follow',
//         headers:{
//           'Content-Type':'application/json',
//           'Authorization': 'Bearer '+ token?.access
//           }
//       };
//         fetch(`http://127.0.0.1:8000/profile/getproductnotifications/`, requestOptions)
//       .then(res=>{
//           return res.json()
//       })
//       .then(response => {
//             setData(response)
//             console.log(response)        
//         }
//         )
        
//       }, [])


//   return (
//     <productNotification.Provider value={{ProductnotificationData:data}}>
//         {props.children}
//     </productNotification.Provider>
//   )
// }

// export default ProductNotification
import React, { useState, useEffect, useRef} from 'react'
import { headerdata } from './CartContxt'



function HeaderContainerData(props) {
  const token= JSON.parse(window.localStorage.getItem("authToken"))|| null
  const localStorageProductNotification= JSON.parse(window.localStorage.getItem("productNotification"))|| null
  const cartState= JSON.parse(window.localStorage.getItem("MY_CARTSTATE"))|| null
  // const localStorageFollowersNotification= JSON.parse(window.localStorage.getItem("gottenNotification"))|| null


    const[followingNotifications, setFollowingNotifications]=useState([])
    const[followingSideData, setFollowingSideData]=useState([])
    const[productNotifications, setpPoductNotifications]=useState([])
    // const[arrayNotification setArrayNotification]=useState([])
    
    const arrayNotification= useRef([])

    // useEffect(()=>{
    // let requestOptions = {
    //     method: 'GET',
    //     redirect: 'follow',
    //     headers:{
    //       'Content-Type':'application/json',
    //       'Authorization': 'Bearer '+ token?.access
    //       }
    //   };
    //     fetch(`http://127.0.0.1:8000/profile/getnotifications/`, requestOptions)
    //   .then(res=>{
    //       return res.json()
    //   })
    //   .then(response => {
    //         setData(response)
    //         for(let i of response){
    //           if(i.seen==="unseen"){
    //            arrayNotification.current.push(i)
    //           }
    //         }
    //         setNotifications(arrayNotification.current)


            
    //       }
    //       )
          
    //     }, [arrayNotification])
    useEffect(()=>{
      let followingrequestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers:{
          'Content-Type':'application/json',
          'Authorization': 'Bearer '+ token?.access
          }
      };
      (async()=>{
        const response= await fetch('http://127.0.0.1:8000/profile/getnotifications/', followingrequestOptions)
        let res= await response.json();
        console.group(res)
        if(res){
          setpPoductNotifications(res)
          // for(let i of response){
          //   if(i.seen==="unseen"){
          //     arrayNotification.current.push(i)
          //   }
          // }
          // setNotifications(arrayNotification.current)
        }

      })()
    }, [token?.access])

    useEffect(()=>{
      let ProductNotificationRequestOptions = {
              method: 'GET',
              redirect: 'follow',
              headers:{
                'Content-Type':'application/json',
                'Authorization': 'Bearer '+ token?.access
                }
            };
      (async()=>{
        const response= localStorageProductNotification ===null && await fetch(`http://127.0.0.1:8000/profile/getproductnotifications/`, ProductNotificationRequestOptions)
        if(response){let res= await response.json();
          console.group(res)
          if(res){
            setpPoductNotifications(res)
          }
        }

      })()
    }, [localStorageProductNotification, token?.access])
     


  //     let ProductNotificationRequestOptions = {
  //       method: 'GET',
  //       redirect: 'follow',
  //       headers:{
  //         'Content-Type':'application/json',
  //         'Authorization': 'Bearer '+ token?.access
  //         }
  //     };
  //     async(
  //       // fetch('http://127.0.0.1:8000/product/retrievecart/'),
  //       fetch('http://127.0.0.1:8000/profile/getnotifications/', followingrequestOptions),
  //       localStorageProductNotification ===null && fetch(`http://127.0.0.1:8000/profile/getproductnotifications/`, ProductNotificationRequestOptions)
  //     )
  //     .then((res)=>{
  //       console.log(res)
  //       return res.json()
  //     .then((result)=>{
  //         setpPoductNotifications(result)
  //       if(dataFollowingNotif){
  //         setFollowingNotifications(dataFollowingNotif)
  //         console.log(dataFollowingNotif)
  //         for(let i of dataFollowingNotif){
  //           if(i.seen==="unseen"){
  //            arrayNotification.current.push(i)
  //           }
  //         }
  //         setFollowingSideData(arrayNotification.current)
  //       }
  //       // console.log(dataCart.serializer)
  //       // setPost(dataPosts)
  //       })
  //      },  [localStorageProductNotification, token?.access])

  //      console.log(productNotifications)
  //      console.log(followingNotifications)
  //      console.log(cartState===null)
  //      console.log(cartState?.length)
  //       // console.log(notifications)
  //       // console.log(data)
  //       // useEffect(()=>{
  //       //   console.log(JSON.stringify(cart))
  //       //   console.log(cartState)
  //       //   console.log(cartState?.items?.length===0)
  //       //   if(cartState===undefined  || !cartState|| cartState.items===null ||  cartState?.items?.length===0 ){
  //       //     window.localStorage.setItem("MY_CARTSTATE", JSON.stringify(cart))
  //       //   }
  //       // }, [cart, cartState])
   

  return (
    <headerdata.Provider value={{
      ProductnotificationData:productNotifications,
      notificationData:followingSideData, 
      setdata:setFollowingSideData, 
      notificationcontext:followingNotifications, 
      setnotificationcontext:setFollowingNotifications,
      }}>
      {props.children}
    </headerdata.Provider>
  )
    }

export default HeaderContainerData