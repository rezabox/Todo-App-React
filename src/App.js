import { BrowserRouter, Route, Routes,  } from "react-router-dom";
import Header from "./Component/Header";
import Home from "./Pages/Home";
import Todo from "./Pages/Todo";
import TodoProvider from "./contex/TodoProvider";
function App() {
  return (
      <>
        <BrowserRouter>
        <Header/>
         <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/tdo" element={<TodoProvider><Todo/></TodoProvider>}></Route>
         </Routes>
        </BrowserRouter>
      </>
  );
}

export default App;
