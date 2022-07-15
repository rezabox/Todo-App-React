import { useContext, useState } from "react";
import todoContext from "../contex/TodoContext";

const FilterTod = ()=>{
    const [loading,setLoading] = useState(false);
   const{filtertod} = useContext(todoContext);
    const handleClick = async(e)=>{
        setLoading(true)
        await filtertod(e.target.value);
        setLoading(false)
    }
  return(
    <>
     <div className="col-md-2">
       <h3 className="text-white">Filter</h3>
       <select onChange={(e) => handleClick(e)} class="form-select form-select-sm mb-3 " >
        {loading && <div className="col-md-12 text-center"><div className="spinner-border" role="status"></div></div>  }
       <option selected>Open this select menu</option>
       <option value="200">all</option>
       <option value="5">5</option>
       <option value="10">10</option>
       <option value="15">15</option>
       <option value="30">30</option>
     </select>
     </div>
    </>
  )
}
export default FilterTod;