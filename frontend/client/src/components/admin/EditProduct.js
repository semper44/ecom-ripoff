import React, { useState, useEffect } from 'react'
import {useParams } from 'react-router-dom'
import { IconButton } from '@mui/material'
import { PhotoCamera } from '@mui/icons-material'
import styles from "../profiles/poductcreation/createproduct.module.css"
// import Modals from '../extra comp/Modals'
import DeleteModals from './DeleteModal'



function EditProduct({edit}) {
  const[editDetail, seteditDetail]=useState()
  const {id}= useParams()
  const token= JSON.parse(window.localStorage.getItem("authToken"))|| null
  console.log(token)
  console.log(token.access)

  function close(){
    edit(false)
  }
  
  useEffect(()=>{
    document.title="Edit"
  },[])

  // useEffect(()=>{
    
  //   editProduct()
  // }, [])

  const editProduct= async ()=>{
    let response= await fetch(`http://127.0.0.1:8000/product/editproduct/${id}`,
    {method:'GET',
    headers:{
      'Content-Type':'application/json',
       'Authorization': 'Bearer '+ token.access
    }})
    let data = await response.json()
    seteditDetail(data)
  }
  function change(){

  }

  function handleSubmit(){
    editProduct()
  }

  return(
      <DeleteModals>
        <div className={styles['all-items']}>
        <button id={styles.cancel} onClick={close}>&#10005;</button>

          <div className={styles['search-items']}>
              <input type="text" 
              className={styles.product} 
              placeholder='category'
              onChange={change}
              value={editDetail?.category}
              name='category'/>

              <input type="text" 
              className={styles.product} 
              placeholder='description'
              onChange={change}
              value={editDetail?.description}
              name='description'/>

              <input type="text" 
              className={styles.colors} 
              placeholder='colors'
              onChange={change}
              value={editDetail?.colors}
              name='colors'/>

              <input type="text" 
              className={styles.colors} 
              placeholder='price'
              onChange={change}
              value={editDetail?.price}
              name='price'/>

              <input type="text" 
              className={styles.colors} 
              placeholder='size'
              onChange={change}
              value={editDetail?.size}
              name='size'/>

              <IconButton variant="outlined" component="label" sx={{color:'cyan'}}>
              <input hidden accept='image/*' type="file"
              className={styles.colors} 
              onChange={change}
              // value={editDetail.image}
              name='image'/>
              <PhotoCamera />
              </IconButton>
              <div className={styles["send-button"]}>
                <button className={styles.searchcreate} onClick={handleSubmit} >Upload</button>
              </div> 
          </div> 
        </div> 
      </DeleteModals>
  )
}

export default EditProduct