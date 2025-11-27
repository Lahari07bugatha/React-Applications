import './App.css'
import React,{useState} from 'react'
function App(){
  let[todoInput,updateInput]= useState('text')
  
 let[todoList, updateTodos]= useState([
    { id:1, text:'learn react'},
    {id:2, text:'learn angular'},
    {id:3, text:'learn web development'}
  ])
  let nextId=3
  function addNewTodo(){
    //alert(todoInput)
    if(todoInput===''){
      alert('enter some task')
    }
    else{

    let  newTodos=[
        ...todoList,
        {id:nextId++, text:todoInput}
      ]
      updateTodos(newTodos)
      updateInput('')
    }
  }

  function deleteTodo(id){
    let updatedTodos= todoList.filter(
        (todo)=>{
          return todo.id!==id
        }
      )
      updateTodos(updatedTodos)
  }

  return(
    <div className="container mt-5 w-50">
      <h2 className='text-center '>Todo App Using React</h2>
       <div className='input-group '> 
        <input  className='form-control' type="text" value={todoInput} onChange={(e)=>{
          let task= e.target.value;
          updateInput(task)
        }}/>
        <button className='btn btn-primary' onClick={()=>{
           addNewTodo()
        }}>Add</button>
       </div>
       <ul className='list-group mt-4'>
        {
          todoList.map(
             (todo) =>{
              return (
                <li className='list-group-item'>
                  <p>{todo.text}</p>
                  <button className='btn' onClick={()=>{
                    deleteTodo(todo.id)
                  }}>❌</button>
                </li>
              )
            }
          )
       }
       </ul>
    </div>
  )
}
export default App