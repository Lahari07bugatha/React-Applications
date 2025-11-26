import './App.css'
import React,{useState} from "react";
function App(){
   let [counter,setCounter] =useState(0)
   let stock=0
   return(
    <>
    <h1>counter App in react</h1>
    <div className="wrapper"> 
    <button className='minus' disabled={counter===0} onClick={()=>{
      if(counter>0){
        setCounter(counter-1)
      }
    }}>-</button>
    <p>{counter}</p>
     <button className='plus' disabled={counter===stock} onClick={()=>{
      if(counter<stock){
        setCounter(counter-1)
      }
    }}>-</button>
    </div>
    </>
   )
}
export default App