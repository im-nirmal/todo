import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name:'todos',
    initialState:{
        item:[]
    },
    reducers:{
        //to save
        saveTodo : (state,action)=>{
            state.item.push(action.payload)
        },
        //delete
        deleteTodo : (state,action)=>{
            state.item = state.item.filter(ele => ele.id !== action.payload)
        },
        //empty all
        emptyTodo : (state,action) =>{
            return state = []
        },
        //todo status
        todoStatus : (state,action)=>{
            const ele = state.item.find(ele => ele.id === action.payload)
            if (ele){
                ele.complete =!ele.complete
            }
        }
    }
})

export default todoSlice.reducer
export const {saveTodo, deleteTodo, emptyTodo, todoStatus} = todoSlice.actions

