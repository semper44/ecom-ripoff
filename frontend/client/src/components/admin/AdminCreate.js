import React, {useReducer, useContext, useEffect, useState} from 'react'
// import styles from "../profiles/poductcreation/createproduct.module.css"
import styles from "./admingeneral.module.css"
import { AuthContext } from '../profiles/login/LoginFetch'
import jwt_decode from "jwt-decode"
import axios from "axios"
import { IconButton } from '@mui/material'
import { PhotoCamera } from '@mui/icons-material'
import Modals from '../extra comp/Modals'


// import axiosInstance  from '../../axios'

const initialValues={
    category:"",
    price:"",
    size:"",
    description:"",
    image:"",
}

function reduce(state, action){
  const n= action.seller
    return{ ...state, [action.name]:action.value, seller:n,  }
}


function AdminCreate(props) {
    const [state, dispatch] = useReducer(reduce, initialValues)
    const [imageState, setimageState] = useState({image:""})
    const [previewImage, setPreviewImage] = useState()
    const {user}= useContext(AuthContext)
    let userDetail
    if(user){
      userDetail= jwt_decode(user.access)  
    }
    function changeFile(e){
      setimageState({image:e.target.files})
      setPreviewImage(window.URL.createObjectURL(e.target.files[0]))

    } 
    console.log(imageState.image[0])
    
    const URL="http://127.0.0.1:8000/product/create/"
    const config= {headers:{
       'Content-Type':'multipart/form-data',
    }}
    function handleSubmit(e){
      e.preventDefault();
      let formData= new FormData()
      formData.append("description", state.description)
      formData.append("price", state.price)
      formData.append("category", state.category)
      formData.append("sellers", state.seller)
      formData.append("size", state.size)
      imageState && formData.append("image", imageState.image[0])
      axios.post(URL, formData, config)
        .then(res=>{
          if(res.status===200){
            window.location.reload()
          }
        })
          .catch(error=>{
            console.log(error)
          })
      // console.log(res.status )
    }

    useEffect(()=>{
      document.title="Administration"
    },[])

    function change(e){
        const {name, value}=e.target
        const action={
        seller:userDetail.user_id,
        name:name,
        value:value
        }
        dispatch(action)
    }
    

  return (
    // <></>
    <Modals>
        <div className={styles['all-items']}>
          <button id={previewImage?styles.pcancel:styles.cancel} onClick={props.onHide}>&#10005;</button>
          <div className={styles['search-items']}>
            <input type="text" 
            className={styles.produc} 
            placeholder='category'
            onChange={change}
            name='category'/>

            <input type="text" 
            className={styles.product} 
            placeholder='description'
            onChange={change}
            name='description'/>

            <input type="text" 
            className={styles.colors} 
            placeholder='colors'
            onChange={change}
            name='colors'/>

            <input type="number" 
            className={styles.colors} 
            placeholder='price'
            onChange={change}
            name='price'/>

            <input type="number" 
            className={styles.colors} 
            placeholder='size'
            onChange={change}
            name='size'/>

            <IconButton variant="outlined" component="label" sx={{color:'cyan', mt:"1.5rem", display:"flex", justifyContent:"center"}}>
            <input hidden accept='image/*' type="file"
            className={styles.colors} 
            onChange={changeFile}
            name='image'/>
            <PhotoCamera />
            </IconButton>
            <div className={styles["send-button"]}>
              <button className={styles.searchcreate} onClick={handleSubmit} >Upload</button>
            </div>    
          </div>
        </div>
    </Modals>
  
  )
}

export default AdminCreate