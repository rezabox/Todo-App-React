import { useContext, useEffect, useState } from "react";
import TodoContext from "../contex/TodoContext";
import FilterTod from "../Component/FilterTod";
import CreateTod from "../Component/CreateTod";
import UpdateTodo from "../Component/UpdateTodo";
import DeleteTodo from "../Component/DeleteTodo";
const Todo = ()=>{
  const {todo,getTodo,error} = useContext(TodoContext);
  const [loading,setLoading] = useState(true);
  useEffect(()=>{
      const fetchData =async()=>{
         await getTodo();
         setLoading(false);
      }
      fetchData();
  },[getTodo]);
   return(
      <>
       <div className="container mt-5">
        <div className="row g-3">
            <CreateTod/>
            <hr/>
          <div>
          <FilterTod/>
          </div>
      {loading && <div className="col-md-12 text-center"><div className="spinner-border" role="status"></div></div> }
      {todo && todo.map(tod=>(
            <div className="col-md-4" key={tod.id}>
                 <div className={"card " + (tod.completed && "bg-light text-info mb-3")}>
                   <div className="card-body d-flex justify-content-between align-items-center">
                        <div>{tod.completed ? <del>{tod.title}</del> : <span>{tod.title}</span>} </div> 
                        <div className="d-flex align-items-center ">
                          <UpdateTodo tod={tod}/>
                          <DeleteTodo todoId={tod.id}/>
                          </div>
                    </div>    
                </div>
            </div>
      ))}
      {error && <div>{error}</div>}
        </div>
       </div>
      </>
   )
}
export default Todo;