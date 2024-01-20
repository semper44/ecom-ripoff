import React, { useContext, useState, useEffect } from 'react'
import styles from  "./searchmodal.module.css"
import Modals from '../extra comp/Modals'
import {ThemeData} from "../../App"
import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material'
 

function SearchModal(props) {
  console.log("search")
    const[disabled, isDisabled]= useState(true)
    const[mainSearch, setMainSearch]= useState(undefined)
    const[realData, setRealData]= useState()
    const[data, setData]= useState({
      search:"",
      color:"",
      category:"",
      price:"",
      size:""
  })
    const {theme}= useContext(ThemeData)


    function Change(e){
      setData({...data, [e.target.name]:e.target.value})
    }

    function handleChange(e){
      setMainSearch(e.target.value)
      isDisabled(false)
    }
    

    console.log(mainSearch)
    useEffect(()=>{
      if(data.search !== ""){
        setRealData({...realData, search:data.search})
      }
      else{
        setRealData({...realData, search:undefined})

      } 
    },[data.search])

    useEffect(()=>{
      if(data.color !== ""){
        setRealData({...realData, color:data.color})
      }else{
        setRealData({...realData, color:undefined})

      }
      
    },[data.color])

    useEffect(()=>{
      if(data.size !== ""){
        setRealData({...realData, size:data.size})
      }else{
        setRealData({...realData, size:undefined})

      }
      
    },[data.size])

    useEffect(()=>{
      if(data.price !== ""){
        setRealData({...realData, price:data.price})
      }else{
        setRealData({...realData, price:undefined})

      }
    },[data.price])

    useEffect(()=>{
      if(data.category !== ""){
        setRealData({...realData, category:data.category})
      }else{
        setRealData({...realData, category:undefined})

      }
      
    },[data.category])

      
   
      function send(){
      if(realData.search && realData.price && realData.color && realData.category && realData.size){
        console.log("sent1")
        fetch(`http://127.0.0.1:8000/product/search?search=${realData.search}&$price=${realData.price}&category=${realData.category}&size=${realData.size}&color=${realData.color}`)
        .then(res=>{
            return res.json()
        })
        .then(response=>{
          console.log(response)
        })
      }
      // search combinations

      else if(!realData.search && realData.price && !realData.color && !realData.category && !realData.size){
        console.log("sent2")
        fetch(`http://127.0.0.1:8000/product/search?price=${realData.price}`)
        .then(res=>{
            return res.json()
        })
        .then(response=>{
          console.log(response)
        })
      }
      else if(!realData.search && !realData.price && realData.color && !realData.category && !realData.size){
        console.log("sent2")
        fetch(`http://127.0.0.1:8000/product/search?color=${realData.color}`)
        .then(res=>{
            return res.json()
        })
        .then(response=>{
          console.log(response)
        })
      }
      else if(!realData.search && !realData.price && !realData.color && realData.category && !realData.size){
        console.log("sent2")
        fetch(`http://127.0.0.1:8000/product/search?category=${realData.category}`)
        .then(res=>{
            return res.json()
        })
        .then(response=>{
          console.log(response)
        })
      }
      else if(!realData.search && !realData.price && !realData.color && !realData.category && realData.size){
        console.log("sent2")
        fetch(`http://127.0.0.1:8000/product/search?size=${realData.size}`)
        .then(res=>{
            return res.json()
        })
        .then(response=>{
          console.log(response)
        })
      }
      else if(realData.search && !realData.price && !realData.color && !realData.category && !realData.size){
        console.log("sent3")

        fetch(`http://127.0.0.1:8000/product/search?search=${realData.search}`)
        .then(res=>{
            return res.json()
        })
        .then(response=>{
          console.log(response)
        })
      }
      else if(realData.search && realData.price && !realData.color && !realData.category && !realData.size){
        console.log("sent3")

        fetch(`http://127.0.0.1:8000/product/search?search=${realData.search}&price${realData.price}`)
        .then(res=>{
            return res.json()
        })
        .then(response=>{
          console.log(response)
        })
      }
      else if(realData.search && !realData.price && realData.color && !realData.category && !realData.size){
        console.log("sent3")

        fetch(`http://127.0.0.1:8000/product/search?search=${realData.search}&color${realData.color}`)
        .then(res=>{
            return res.json()
        })
        .then(response=>{
          console.log(response)
        })
      }
      else if(realData.search && !realData.price && !realData.color && realData.category && !realData.size){
        console.log("sent3")

        fetch(`http://127.0.0.1:8000/product/search?search=${realData.search}&category${realData.category}`)
        .then(res=>{
            return res.json()
        })
        .then(response=>{
          console.log(response)
        })
      }
      else if(realData.search && !realData.price && !realData.color && !realData.category && realData.size){
        console.log("sent3")

        fetch(`http://127.0.0.1:8000/product/search?search=${realData.search}&size${realData.size}`)
        .then(res=>{
            return res.json()
        })
        .then(response=>{
          console.log(response)
        })
      }
      // price combinations

      else if(!realData.search && realData.price && realData.color && realData.category && !realData.size){
        console.log("sent3")

        fetch(`http://127.0.0.1:8000/product/search?price=${realData.price}&color=${realData.color}&category=${realData.category}`)
        .then(res=>{
            return res.json()
        })
        .then(response=>{
          console.log(response)
        })
      }
      else if(realData.search && realData.price && realData.color && !realData.category && realData.size){
        console.log("sent3")
        fetch(`http://127.0.0.1:8000/product/search?price=${realData.price}&search=${realData.search}&color=${realData.color}&size=${realData.size}`)
        .then(res=>{
            return res.json()
        })
        .then(response=>{
          console.log(response)
        })
      }
      else if(!realData.search && realData.price && realData.color && !realData.category && !realData.size){
        console.log("sent3")

        fetch(`http://127.0.0.1:8000/product/search?price=${realData.price}&color=${realData.color}`)
        .then(res=>{
            return res.json()
        })
        .then(response=>{
          console.log(response)
        })
      }
      else if(!realData.search && realData.price && !realData.color && realData.category && !realData.size){
        console.log("sent3")

        fetch(`http://127.0.0.1:8000/product/search?price=${realData.price}&category=${realData.category}`)
        .then(res=>{
            return res.json()
        })
        .then(response=>{
          console.log(response)
        })
      }
      else if(realData.search && realData.price && !realData.color && realData.category && realData.size){
        console.log("sent3")

        fetch(`http://127.0.0.1:8000/product/search?price=${realData.price}&size=${realData.size}&category=${realData.category}&search=${realData.search}`)
        .then(res=>{
            return res.json()
        })
        .then(response=>{
          console.log(response)
        })
      }
      else if(!realData.search && realData.price && !realData.color && realData.category && realData.size){
        console.log("sent3")

        fetch(`http://127.0.0.1:8000/product/search?price=${realData.price}&size=${realData.size}&category=${realData.category}`)
        .then(res=>{
            return res.json()
        })
        .then(response=>{
          console.log(response)
        })
      }
      else if(!realData.search && realData.price && realData.color && !realData.category && realData.size){
        console.log("sent3")

        fetch(`http://127.0.0.1:8000/product/search?price=${realData.price}&size=${realData.size}&color=${realData.color}`)
        .then(res=>{
            return res.json()
        })
        .then(response=>{
          console.log(response)
        })
      }
      else if(!realData.search && realData.price && !realData.color && !realData.category && realData.size){
        console.log("sent3")

        fetch(`http://127.0.0.1:8000/product/search?price=${realData.price}&size=${realData.size}`)
        .then(res=>{
            return res.json()
        })
        .then(response=>{
          console.log(response)
        })
      }
      else if(!realData.search && realData.price && realData.color && realData.category && realData.size){
        console.log("sent3")

        fetch(`http://127.0.0.1:8000/product/search?price=${realData.price}&size=${realData.size}&color=${realData.color}&category=${realData.category}`)
        .then(res=>{
            return res.json()
        })
        .then(response=>{
          console.log(response)
        })
      }

      // color combination

      else if(!realData.search && !realData.price && realData.color && realData.category && !realData.size){
        console.log("sent3")

        fetch(`http://127.0.0.1:8000/product/search?color=${realData.color}&category=${realData.category}`)
        .then(res=>{
            return res.json()
        })
        .then(response=>{
          console.log(response)
        })
      }
      else if(!realData.search && !realData.price && realData.color && realData.category && realData.size){
        console.log("sent3")

        fetch(`http://127.0.0.1:8000/product/search?color=${realData.color}&category=${realData.category}&size=${realData.size}`)
        .then(res=>{
            return res.json()
        })
        .then(response=>{
          console.log(response)
        })
      }
      else if(!realData.search && !realData.price && realData.color && !realData.category && realData.size){
        console.log("sent3")

        fetch(`http://127.0.0.1:8000/product/search?color=${realData.color}&size=${realData.size}`)
        .then(res=>{
            return res.json()
        })
        .then(response=>{
          console.log(response)
        })
      }
      else if(realData.search && !realData.price && realData.color && realData.category && realData.size){
        console.log("sent3")

        fetch(`http://127.0.0.1:8000/product/search?size=${realData.size}&category=${realData.category}&color=&size=${realData.size}${realData.color}&search=${realData.search}`)
        .then(res=>{
            return res.json()
        })
        .then(response=>{
          console.log(response)
        })
      }
      else if(!realData.search && !realData.price && !realData.color && realData.category && realData.size){
        console.log("sent3")

        fetch(`http://127.0.0.1:8000/product/search?size=${realData.size}&category=${realData.category}`)
        .then(res=>{
            return res.json()
        })
        .then(response=>{
          console.log(response)
        })
      }
      else if(realData.search && realData.price && realData.color && realData.category && !realData.size){
        console.log("sent3")

        fetch(`http://127.0.0.1:8000/product/search?size=${realData.size}&category=${realData.category}&search=${realData.search}&color=${realData.color}`)
        .then(res=>{
            return res.json()
        })
        .then(response=>{
          console.log(response)
        })
      }
      
      // search combination
      else if(realData.search && realData.price && !realData.color && !realData.category && realData.size){
        console.log("sent3")

        fetch(`http://127.0.0.1:8000/product/search?price=${realData.price}&category=${realData.category}&search=${realData.search}&color=${realData.color}`)
        .then(res=>{
            return res.json()
        })
        .then(response=>{
          console.log(response)
        })
      }
      else if(realData.search && !realData.price && realData.color && !realData.category && realData.size){
        console.log("sent3")

        fetch(`http://127.0.0.1:8000/product/search?color=${realData.color}&search=${realData.search}&color=${realData.color}`)
        .then(res=>{
            return res.json()
        })
        .then(response=>{
          console.log(response)
        })
      }


      // testing
      // else if(realData.search && !realData.price && realData.color && !realData.category && realData.size){
      //   console.log("sent3")

      //   fetch(`http://127.0.0.1:8000/product/search?price=${realData.price}&category=${realData.category}&search=${realData.search}&color=${realData.color}`)
      //   .then(res=>{
      //       return res.json()
      //   })
      //   .then(response=>{
      //     console.log(response)
      //   })
      // }

    }


  return (
    <Modals>
    {/* <div className='modal-bg' > */}
        <div className={theme?styles["theme-dark"]:styles['all-items']}>
          <button id={styles.cancel} onClick={props.onHide}>&#10005;</button>
          <div className={styles['search-items']}>
            <div className={styles.first}>
              <input type="text" 
              value={data.search}
              className={styles.product} 
              placeholder='Search'
              onChange={Change}
              name='search'/>
          </div>
          <div className={styles.radio}>          
            <FormControl>
              <RadioGroup 
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
              value={mainSearch} onChange={handleChange} >
                <FormControlLabel value="profile"  control={<Radio />} label="Profiles" />
                <FormControlLabel value="product"  control={<Radio />} label="Products" />
              </RadioGroup>
            </FormControl>
            </div>

            <div className={styles["specific-search"]}>
              <div className={styles["specific-search-child"]}>
              
                {/* <input type="text" 
                className={styles.colors} 
                placeholder='color'
                onChange={Change}
                value={data.color}
                name='color'
                disabled={disabled}/> */}

                <input type="text" 
                value={data.category}
                className={styles.sellers}
                placeholder='category'
                onChange={Change}
                name='category'
                disabled={disabled}/>
                
                <input type="text" 
                value={data.price}
                className={styles.price}
                placeholder='Maximum price'
                onChange={Change}
                name='price'
                disabled={disabled}/>

                <input type="text" 
                value={data.size}
                className={styles.price}
                placeholder='Size'
                onChange={Change}
                name='size'
                disabled={disabled}/>
              </div>
            </div>
            <div className={styles["send-button"]}>
              <button className={disabled? styles.disabled:styles.search} onClick={send} disabled={disabled}>Search</button>
            </div>
          </div>
      </div>
    </Modals>
  )
}

export default SearchModal