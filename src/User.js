import { Link,Outlet ,useLocation, useParams } from "react-router-dom"

function User(){

 let {id,name}= useParams()
  
   let queryparams=useLocation()
   console.log(queryparams)
   let query=new URLSearchParams(queryparams.search)
  let category= query.get('category')
  let ports= query.get('ports')

    return(
        <>
         <h1>This is User Page</h1>
         <h3>user id:{id}</h3>
         <h3>category:{category}</h3>
         <h3>user name:{name}</h3>
         <h3>ports:{ports}</h3>
         <Outlet/>
         <div>
            <button><Link to='orders'>Orders</Link></button>
         <button><Link to='profile'>Profile</Link></button>
         </div>

        </>
    )
}
 export function Orders(){
    return(
        <>
         <h1>This is Orders Page</h1>
        </>
    )
}

export function Profile(){
    return(
        <>
         <h1> This is Profile Page</h1>
        </>
    )
}

export default User