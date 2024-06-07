import React from "react"
import './App.scss'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Signin from './pages/Signin';
import Signup from "./pages/Signup";
import Tasks from "./pages/Tasks";
function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Tasks/>} />
          <Route path="/signin" element={<Signin/>} />
          <Route path="/signup" element={<Signup/>} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
