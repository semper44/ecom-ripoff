import React, { useState, useContext, useEffect, useRef} from 'react'
// import { notificationProvider } from '../../stores/CartContxt'


function FetchTry(props) {
  const token= JSON.parse(window.localStorage.getItem("authToken"))|| null
  const localStorageProductNotification= JSON.parse(window.localStorage.getItem("productNotification"))|| null
  const cartState= JSON.parse(window.localStorage.getItem("MY_CARTSTATE"))|| null
  const localStorageFollowersNotification= JSON.parse(window.localStorage.getItem("gottenNotification"))|| null
  console.log(cartState)


    const[followingNotifications, setFollowingNotifications]=useState([])
    const[followingSideData, setFollowingSideData]=useState([])
    const[productNotifications, setpPoductNotifications]=useState([])
    const[cart, setCart]=useState([])
    // const[arrayNotification, setArrayNotification]=useState([])
    
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
      let ProductNotificationRequestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers:{
          'Content-Type':'application/json',
          'Authorization': 'Bearer '+ token?.access
          }
      };
      Promise.all([
        cartState ===null && fetch('http://127.0.0.1:8000/product/retrievecart/'),
        localStorageFollowersNotification ===null && fetch(`http://127.0.0.1:8000/profile/getnotifications/`, followingrequestOptions),
        localStorageProductNotification ===null && fetch(`http://127.0.0.1:8000/profile/getproductnotifications/`, ProductNotificationRequestOptions)
      ])
      .then(([resCart, resFollowingNotif, resProductNotif])=>
        Promise.all([resCart.json(), resFollowingNotif.json(), resProductNotif.json()]))
      .then(([dataCart, dataFollowingNotif,dataProductNotif])=>{
        console.log(dataCart)
        console.log("dataCart")
        if(dataCart){
          dataCart.serializer.forEach((obj, index) => {
            obj.qty=JSON.parse(dataCart.item_qty)[index]
            
          })
          setCart(dataCart.serializer)
        }
        if(dataProductNotif){
          setpPoductNotifications(dataProductNotif)
        }
        if(dataFollowingNotif){
          setFollowingNotifications(dataFollowingNotif)
          console.log(dataFollowingNotif)
          for(let i of dataFollowingNotif){
            if(i.seen==="unseen"){
             arrayNotification.current.push(i)
            }
          }
          setFollowingSideData(arrayNotification.current)
        }
        // console.log(dataCart.serializer)
        // setPost(dataPosts)
        })
       },  [token?.access])

       console.log(productNotifications)
       console.log(followingNotifications)
       console.log(cart)
        // console.log(notifications)
        // console.log(data)
        // useEffect(()=>{
        //     setNotifications(arrayNotification)

        // }, [])
   

  return (
    // <notificationProvider.Provider value={{notificationData:data, setdata:setData, notificationcontext:notifications, setnotificationcontext:setNotifications}}>
   <>
   hy
   </>
  )
}

export default FetchTry