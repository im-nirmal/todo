import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import {saveTodo,deleteTodo, emptyTodo, todoStatus} from '../REDUX/todoSlice'


function Todo() {
    const [inputTask,setInputTask] = useState("")
    const dispatch = useDispatch()
    const todos = useSelector(state=>{
        // console.log(state);
        return state.todos.items})

    //submit
    const handleSubmit = (e)=>{
        e.preventDefault()
        if(!inputTask.trim())
            return
        const newTodo= {
            id:Date.now(),
            text:inputTask,
            completed:false
        }
        dispatch(saveTodo(newTodo));
    setInputTask('');
    }


    const handleCheck = (id)=>{
        dispatch(todoStatus(id))
    }
    

  return (
    <>
        <div className='container mt-5 bg-warning '>
            <form onSubmit={handleSubmit}>
                <h1 className='text-center fw-bolder'>My Todo List</h1>
                <div className='d-flex justify-content-center mt-5'>
                    <Form.Control value={inputTask} onChange={(e)=>setInputTask(e.target.value)} className='w-25' type="text" placeholder="Add todo..." />
                    <button  className='btn btn-success ms-4' type="submit">Submit</button>
                </div>
            </form>
            <ul className='mt-5 mb-5 border'>
            {   todos.map(todo=>(
                    
                        <li key={todo.id} style={{textDecoration: todo.completed ? 'line-through' :'none'}} className='d-flex justify-content-between fs-3 mt-3 mb-3 ms-4'> <div>{todo.text}</div>
                        
                            <div>
                                <input onChange={()=>handleCheck(todo.id)} className="form-check-input ms-2" type="checkbox" value="" id={`checkbox-${todo.id}`} checked={todo.completed}/>
                                <button onClick={()=>dispatch(deleteTodo(todo.id))} className='btn btn-danger ms-2 me-3 '>Delete</button>
                            </div>
                        
                    </li>
                    
            ))
                
            }
            

           
            </ul>
            <div className='d-flex justify-content-center '>
                <button onClick={()=>dispatch(emptyTodo())} className='btn  w-25 btn-danger  mb-5'>Empty All</button>
            </div>
            
        </div>
    </>
  )
}

export default Todo