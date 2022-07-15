const todoReducer =(state,action)=>{
  switch(action.type){
      case "SET_TODOS" :
        console.log(action)
         return {
            ...state,
            todo: action.payload
         };
         case "FILTER_TOD" :
          console.log(action)
           return {
              ...state,
              todo: action.payload
           };
           case "ADD_TOD" :
            console.log(action)
             return {
                ...state,
                todo:[action.payload,...state.todo]
             };
         case "SET_ERROR" :
          console.log(action)
           return {
              ...state,
             error: action.payload
           };
           case "UPDATE_TASK" :
          console.log(action)
           return {
              ...state,
             todo: state.todo.map(tod => tod.id === action.payload.id ? {...tod, completed : action.payload.completed} : tod)
           };
           case "REMOVE_TODO" :
            console.log(action)
             return {
                ...state,
               todo: state.todo.filter(tod => tod.id !== action.payload)
             };
        default:
            return state
  }
}
export default todoReducer;