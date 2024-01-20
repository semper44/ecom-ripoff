import React, {useState, useEffect, useContext} from 'react'
import { AuthContext } from '../components/profiles/login/LoginFetch';
import { profileContext } from './CartContxt';
import jwt_decode from "jwt-decode";


function ProfileProvider(props) {
  const[profileNotification, setProfileNotification]= useState([])
    
    const users= useContext(AuthContext)
    let userDetails;
    if(users.user){
      userDetails=jwt_decode(users?.user?.access)
    }
    


    useEffect(()=>{
        try{
           fetch(`http://127.0.0.1:8000/profile/profdetails/${userDetails.user_id}`)
          .then(res =>{
              if(!res.ok){
                  throw Error('could not fetch the data for that resource')
              }
          return res.json();
          })
          .then(data => {
            data?.map((item)=>{
              setProfileNotification(item.notification)
            })
            console.log(data.followers, userDetails?.user_id )
    
    });
  }catch(error){
    // console.log(error)
  }
  }, [userDetails?.user_id])
  console.log(profileNotification)
  return (
    <>
        <profileContext.Provider value={{
            setProfileNotifications:setProfileNotification,
            profileNotification:profileNotification

            }}>
            {props.children}
        </profileContext.Provider>
    </>
  )
}

export default ProfileProvider