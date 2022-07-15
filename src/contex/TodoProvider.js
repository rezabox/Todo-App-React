import axios from "axios";
import { useCallback, useReducer } from "react";
import TodoContext from "./TodoContext";
import todoReducer from "./todoReducer";
const TodoProvider = ({children})=>{
    const initialState = {
         todo:[] ,
         error:null
    }

    const [state,dispatch] = useReducer(todoReducer,initialState);
    
    const getTodo =useCallback(async()=> {
        try{
           const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
           dispatch({type:'SET_TODOS', payload:res.data});
        }catch(err){
          dispatch({type:'SET_ERROR', payload:err.message});
          console.log(err.message);
        }
    },[])  
    const filtertod =async(e)=>{
        try{
            const res = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${e}`);
            dispatch({type:'FILTER_TOD', payload:res.data});
         }catch(err){
           dispatch({type:'SET_ERROR', payload:err.message});
           console.log(err.message);
         }
    }
    const addtod =async(title)=>{
        try{
            const res = await axios.post("https://jsonplaceholder.typicode.com/todos",{
                title:title,
                completed:false
            });
            dispatch({type:'ADD_TOD', payload:res.data});
         }catch(err){
           dispatch({type:'SET_ERROR', payload:err.message});
           console.log(err.message);
         }
    }
    const UpdateTask =async(tod)=>{
      try{
          const res = await axios.put(`https://jsonplaceholder.typicode.com/todos/${tod.id}`,{
              title:tod.title,
              completed:!tod.completed
          });
          dispatch({type:'UPDATE_TASK', payload:res.data});
       }catch(err){
         dispatch({type:'SET_ERROR', payload:err.message});
         console.log(err.message);
       }
  }
  const removeTodo =async(todoId)=>{
    try{
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${todoId}`);
        dispatch({type:'REMOVE_TODO', payload:todoId});
        console.log("Delete");
     }catch(err){
       dispatch({type:'SET_ERROR', payload:err.message});
       console.log(err.message);
     }
}
    return(
    <TodoContext.Provider value={{ ...state,getTodo,filtertod,addtod,UpdateTask,removeTodo }}>
           {children}
    </TodoContext.Provider>
    )
  }

export default TodoProvider;