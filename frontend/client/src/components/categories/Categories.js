import React,{useEffect} from 'react'
import "./categories.css"
import CategoriesProps from './CategoriesProps'
import watch from "../../ecom_images/watch.webp"
// import {useTitle} from "../extra comp/"

function Categories() {
  useEffect(()=>{document.title="Categories"
},[])
  console.log("categories")
  return (
    <>
    <div className="category-props-main">
        <CategoriesProps img={watch} category={"Shoes"} product={"Washing Machine"} />
        <CategoriesProps img={watch} category={"Shoes"} product={"Washing Machine"} />
        <CategoriesProps img={watch} category={"Shoes"} product={"Washing Machine"} />
        <CategoriesProps img={watch} category={"Shoes"} product={"Washing Machine"} />
        <CategoriesProps img={watch} category={"Shoes"} product={"Washing Machine"} />
        <CategoriesProps img={watch} category={"Shoes"} product={"Washing Machine"} />
    </div>
    </>
  )
}

export default  React.memo(Categories)