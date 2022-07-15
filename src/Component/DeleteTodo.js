import { useContext, useState } from "react"
import Swal from "sweetalert2";
import todoContext from "../contex/TodoContext"

const DeleteTodo = ({todoId})=>{
   const { removeTodo } =  useContext(todoContext);
   const[loading,setLoading] = useState(false);
    const handleDelete = async()=>{
       setLoading(true); 
       Swal.fire({
        title:"Deleted Todo",
        icon: "warning",
        showConfirmButton: false,
        timerProgressBar: true,
        timer:3000,
        toast:true,
        position:'top',
    })      
       await removeTodo(todoId);
       setLoading(false); 
    }
     return(
        <>
           <i onClick={()=> handleDelete()} className="bi bi-trash fs-"></i>
           {loading && <div className="spinner-border spinner-border-sm ms-2" role="status"></div>}
        </>
     )
}
export default DeleteTodo;