import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import {saveTodo,deleteTodo, emptyTodo, todoStatus} from '../REDUX/todoSlice'


function Todo() {
    const [inputTask,setInputTask] = useState("")
    const dispatch = useDispatch()
    const todos = useSelector(state=>state.todos)

    //submit
    const handleSubmit = (e)=>{
        e.preventDefault()
        if(!input.trim())
            return
        const newTodo= {
            id:Date.now(),
            text:input,
            completed:false
        }
        dispatch(saveTodo(newTodo));
    setInputTask('');
    }

  return (
    <>
        <div className='container mt-5 bg-warning '>
            <form >
                <h1 className='text-center fw-bolder'>My Todo List</h1>
                <div className='d-flex justify-content-center mt-5'>
                    <Form.Control value={inputTask} onChange={(e)=>setInputTask(e.target.value)} className='w-25' type="text" placeholder="Add todo..." />
                    <button onClick={(e)=>handleSubmit()} className='btn btn-success ms-4' type="submit">Submit</button>
                </div>
            </form>
            <ul className='mt-5 mb-5 border'>
            {   todos.map(todos=>(
                    <li key={todos.id} style={{textDecoration:'none'}} className='fs-3 mt-3 mb-3 ms-4'> task1
                    <input className="form-check-input ms-2" type="checkbox" value="" id="flexCheckChecked" />
                    <button onClick={()=>dispatch(deleteTodo(todos.id))} className='btn btn-danger ms-2 '>Delete</button>
                </li>
            ))
                
            }
            

           
            </ul>
            <div className='d-flex justify-content-center '>
                <button onClick={()=>dispatch(deleteTodo(todos.id))} className='btn  w-25 btn-danger  mb-5'>Empty All</button>
            </div>
            
        </div>
    </>
  )
}

export default Todo