import { useContext, useState } from "react";
import todoContext from "../contex/TodoContext";
import Swal from "sweetalert2";
const CreateTod = ()=> {
    const [title,setTitle] = useState('');
    const [loading,setLoading] = useState(false);
    const {addtod} =  useContext(todoContext);
    const handleSubmit = async(e)=>{
        e.preventDefault();
        if(title){
            setLoading(true);
            Swal.fire({
                title:"Add todo",
                icon: "success",
                showConfirmButton: false,
                timerProgressBar: true,
                timer:3000,
                toast:true,
                position:'top',
            })
            await addtod(title);
            setLoading(false);
        }
      }
    return(
             <div>
                <h2 className="text-info">Create Todo :</h2>
                <form className="row " onSubmit={(e)=> handleSubmit(e)}>
                 <div className="col-md-6">
                 <input type="text" class="form-control" onChange={(e)=> setTitle(e.target.value)} value={title} placeholder="Todo Title ..."/>
                 <div className="form-text text-danger">
                    {title ? '' : 'Title is Requre'}
                 </div>
                 </div>
                    <div className="col-auto">
                     <button type="submit" className="btn btn-dark">Create Todo{loading && <div className="spinner-border spinner-border-sm ms-2" role="status"></div>}</button>
                    </div>  
                 </form>
             </div>
    )
}
export default CreateTod;