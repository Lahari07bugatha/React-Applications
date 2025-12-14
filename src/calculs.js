import Keypads from "./keypads"
import React,{useState} from "react"
function Appp(){

    let [input,setInput]=useState('')

   function handleClick(value){
       setInput(input+value)
   }
   function calculate(value){
     let outputval= eval(input)
     setInput(outputval)
   }
    
   function handleClear(){
         setInput('')
   }



    return(
        <>
         <div className="container"> 
            <h2>Calculator using react</h2>
            <div className="calclus">
                <input type="text" className="output" value={input}  />
                <Keypads handleClick={handleClick} calculate={calculate} handleClear={handleClear}/>
            </div>
         </div>
        </>
    )
}
export default Appp
