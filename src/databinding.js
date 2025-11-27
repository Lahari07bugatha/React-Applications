import React,{useState} from "react"

function Data(){
   // let num=100
    let[num,updateNum]= useState(100)
    return(
        <>
          <h1>{num}</h1>
          <button onClick={()=>{
            updateNum(200)
          }} > click</button>
          <br></br>
          <input type="text" value={num} onChange={(e)=>{
             let temp=e.target.value
             updateNum(temp)
          }}/>
        </>
    )
}
export default Data