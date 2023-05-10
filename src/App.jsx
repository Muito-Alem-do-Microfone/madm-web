import "./App.css";
import Login from "./components/templates/Login";
import Register from "./components/templates/Register";
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
    </Routes>
  );
}

export default App;
