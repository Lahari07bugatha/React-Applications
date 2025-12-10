import { useEffect, useState } from "react"
import ProductCard from "./Product-card"
import './Api.css' 
function Api(){

let[products,updateProducts]=useState([])


useEffect(
  ()=>{
      getProducts()
  } ,[])

async function getProducts(){
  // fetch gives the promise object 
let res= await fetch('https://fakestoreapi.com/products')
 
let productlist=  await res.json()

  updateProducts(productlist)
console.log(productlist)
}


  if(products.length==0){
    return (<h1>fetching data...</h1>)
  }
  return(
   <>
   <div className="product-list">
    { 
    products.map((p)=>
      <ProductCard {...p} key={p.id} />
    ) }
   </div>

   </>
  )
}


export default Api