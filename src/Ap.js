import Home from "./Home"
import About from "./About"
import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import Contact from "./Contact"
import Login from "./Login"
import User, { Orders, Profile } from "./User"
import './Ap.css'
import { useRef, useState } from "react"

function Header(){
    return(
        <>
         <div className="head">

             <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
            <li><Link to='/login'>Login</Link></li>
            <li> <Link to='/User/10/lahari?ports=5&category=natural'>User</Link></li>
    
          </ul>
         </div>
        </>
    )
}
function Errorpage(){
    return(
        <>
        <h1>Oops Page Not Found</h1>
        <p> 404 Error </p>
        </>
    )
}
function Ap(){
    return(
        <>
          <BrowserRouter>

            <Header/>
           <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/About" element={<About/>}/>
            <Route path="/Contact" element={<Contact/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="User/:id/:name" element={<User/>}>
              <Route path="Orders" element={<Orders/>}/>
             <Route path="Profile" element={<Profile/>}/>
             
            </Route>
            <Route path="*" element={<Errorpage/>}/> 

           </Routes>
          </BrowserRouter>   
          <></>
         {/* <Home/>
          <About/> */}
         <List/>
         <Useref/>
         <Mulele/>
        </>
    )
}

 function List(){

    let langs=[
        {id:1,lang:'HTML'},
        {id:2,lang:'CSS'},
        {id:3,lang:'JS'} ]
    return(
        <>

        <h1>Lists & Keys in react</h1>
        { 
          langs.map(
            (l) => <li key={l.id}> {l.lang} </li>
           )
         
        }
        </>
    )
}
// useref hook

function Useref(){

   let ele = useRef(null)

   let x=useRef(10)

   let [y,sety]=useState(100)

   let z=1000

    console.log(ele)
    return(
        <>
          <h1 ref={ele} className="active">This is Heading Tag</h1>
          <button onClick={()=>
            
            {
            console.log(ele)
            
            console.log(ele.current)
            
            ele.current.classList.toggle('active')
          //  ele.current.classList.toggle('inactive')

           } }>click</button>
           <h2>x value:{x.current}</h2>
           <h3>z value:{z}</h3>
           <button onClick={()=>{

            x.current = x.current+10
           
            console.log(x.current)

            z=z+1000

            sety(y+100)
          
          }}>increment</button>
         
        </>
    )
}

// useRef for multiple elemnts 

function Mulele(){


function changeh1style(e){
  
    for(let ele of headings.current){
      ele.classList.remove('primary')
    }
    e.target.classList.add('primary')
    
  
}

  let arr= new Array(5).fill(null)
 

  let headings=useRef([])

  return(
    <>
     
     {
      arr.map(
        (ele,i)=>{
            return(
               <h1 ref={(el)=>headings.current[i]=el} 
      onClick={(eve)=>{
         changeh1style(eve)
      }}> This is Heading{i+1} </h1>
            )
      })
     }

  
     {/* <h1 ref={(el)=>headings.current[1]=el} 
      onClick={(eve)=>{
        changeh1style(eve)
      }}
      
      >this is heading2</h1>
     <h1 ref={(el)=>headings.current[2]=el} 
      
        onClick={(eve)=>{
        changeh1style(eve)
      }}
      >this is heading3</h1>
     <h1 ref={(el)=>headings.current[3]=el}
     
       onClick={(eve)=>{
        changeh1style(eve)
      }}
     >this is heading4</h1> */}

    </>
  )
}



export default Ap