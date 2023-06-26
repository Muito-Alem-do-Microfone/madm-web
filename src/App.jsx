import Login from "./components/templates/Login";
import Home from "./components/templates/Home";
import Register from "./components/templates/Register";
import Mural from "./components/templates/Mural";
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/mural' element={<Mural/>}/>
      <Route path='/search' element={<Search/>}/>
    </Routes>
  );
}

export default App;
