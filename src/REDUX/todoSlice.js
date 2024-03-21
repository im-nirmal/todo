import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name:'todos',
    initialState:{
        items:[]
    },
    reducers:{
        //to save
        saveTodo : (state,action)=>{
            state.items.push(action.payload)
        },
        //delete
        deleteTodo : (state,action)=>{
            state.items = state.items.filter(todo => todo.id !== action.payload)
        },
        //empty all
        emptyTodo : (state,action) =>{
            state.items = []
        },
        //todo status
        todoStatus : (state,action)=>{
            const todo = state.items.find(todo => todo.id === action.payload)
            if (todo){
                todo.completed =!todo.completed
            }
        }
    }
})

export default todoSlice.reducer
export const {saveTodo, deleteTodo, emptyTodo, todoStatus} = todoSlice.actions

