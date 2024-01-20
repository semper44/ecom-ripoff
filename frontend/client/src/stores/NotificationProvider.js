// import React, { useState, useContext, useEffect, useRef} from 'react'
// import { notificationProvider } from './CartContxt'


// function NotificationProvider(props) {
//   const token= JSON.parse(window.localStorage.getItem("authToken"))|| null


//   // let userDetails;
//   //   if(logIn?.user){
//   //     userDetails=jwt_decode(logIn?.user?.access)
//   //   }
//     const[data, setData]=useState()
//     const[notifications, setNotifications]=useState([])
//     // const[followingNotifications, setFollowingNotifications]=useState([])
//     // const[productNotifications, setpPoductNotifications]=useState([])
//     // const[cart, setCart]=useState([])
//     // const[arrayNotification, setArrayNotification]=useState([])
    
//     const arrayNotification= useRef([])

//     useEffect(()=>{
//     let requestOptions = {
//         method: 'GET',
//         redirect: 'follow',
//         headers:{
//           'Content-Type':'application/json',
//           'Authorization': 'Bearer '+ token?.access
//           }
//       };
//         fetch(`http://127.0.0.1:8000/profile/getnotifications/`, requestOptions)
//       .then(res=>{
//           return res.json()
//       })
//       .then(response => {
//             setData(response)
//             console.log(response)
//             for(let i of response){
//               if(i.seen==="unseen"){
//                arrayNotification.current.push(i)
//               }
//             }
//             setNotifications(arrayNotification.current)


            
//           }
//           )
          
//         }, [arrayNotification])

   
//     // useEffect(()=>{
//     //   let followingrequestOptions = {
//     //     method: 'GET',
//     //     redirect: 'follow',
//     //     headers:{
//     //       'Content-Type':'application/json',
//     //       'Authorization': 'Bearer '+ token?.access
//     //       }
//     //   };
//     //   let ProductNotificationRequestOptions = {
//     //     method: 'GET',
//     //     redirect: 'follow',
//     //     headers:{
//     //       'Content-Type':'application/json',
//     //       'Authorization': 'Bearer '+ token?.access
//     //       }
//     //   };
//     //   Promise.all([
//     //     fetch('http://127.0.0.1:8000/product/retrievecart/'),
//     //     fetch(`http://127.0.0.1:8000/profile/getnotifications/`, followingrequestOptions),
//     //     fetch(`http://127.0.0.1:8000/profile/getproductnotifications/`, ProductNotificationRequestOptions)
//     //   ])
//     //   .then(([resCart, resFollowingNotif, resProductNotif])=>
//     //     Promise.all([resCart.json(), resFollowingNotif.json(), resProductNotif.json()]))
//     //   .then(([dataCart, dataFollowingNotif,dataProductNotif])=>{
//     //     console.log(dataCart)
//     //     console.log(dataProductNotif)
//     //     console.log(dataFollowingNotif)
//     //     if(dataCart){
//     //       dataCart.serializer.forEach((obj, index) => {
//     //         obj.qty=JSON.parse(dataCart.item_qty)[index]
            
//     //       })
//     //     }
//     //     console.log(dataCart)
//     //     setCart(dataCart)
//     //     // setPost(dataPosts)
//     //     })
//     //    },  [token?.access])
//     //     console.log(notifications)
//     //     console.log(data)
//     //     useEffect(()=>{
//     //         setNotifications(arrayNotification)

//     //     }, [])
   

//   return (
//     <notificationProvider.Provider value={{notificationData:data, setdata:setData, notificationcontext:notifications, setnotificationcontext:setNotifications}}>
//     {/* // <notificationProvider.Provider value={{notificationData:data, setdata:setData}}> */}
//         {props.children}
//     </notificationProvider.Provider>
//   )
// }

// export default NotificationProvider