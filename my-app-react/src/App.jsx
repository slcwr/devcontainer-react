//import  TodoSearch  from "./pages/Todo/TodoSearch";
import  TodoInput  from "./pages/Todo/TodoInput";
import  TodoList  from "./pages/Todo/TodoList";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import './App.css';

function App() {
  return (
    <div>
    <center>
     <h1>Todo一覧</h1>
     </center>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<TodoList />} />
      <Route path="/add" element={<TodoInput />} />
      {/* <Route path="/search" element={<TodoSearch />} /> */}
    </Routes>
  </BrowserRouter>
  </div>
  );
}

export default App;
