import { useContext, useState } from "react";
import Swal from "sweetalert2";
import todoContext from "../contex/TodoContext";

const UpdateTodo = ({tod})=>{
    const {UpdateTask} = useContext(todoContext);
    const [loading,setLoading] = useState(false);
    const handleUpdate = async()=>{
         setLoading(true);
         Swal.fire({
            title:"Update Todo",
            icon: "success",
            showConfirmButton: false,
            timerProgressBar: true,
            timer:3000,
            toast:true,
            position:'top',
        })
         await UpdateTask(tod);
         setLoading(false);
    }
    return(
       <>
          {tod.completed ?  <i onClick={() => handleUpdate()} className="bi bi-check2-all fs-6"></i> 
          : <i onClick={() => handleUpdate()} className="bi bi-check2 fs-6"></i>}
          {loading && <div className="spinner-border spinner-border-sm ms-2" role="status"></div>}
       </>
    )
}
export default UpdateTodo;