import React from 'react'
import {BrowserRouter , Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import Signin from './pages/Signin'
import About from './pages/About'
import Header from './components/Header'
export default function App() {
  return (
   <BrowserRouter>
   <Header/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/signup' element={<SignUp/>} />
    <Route path='/signin' element={<Signin/>}/>
    <Route path='/about' element={<About/>}/>
    <Route/>
    
   
   </Routes>
   </BrowserRouter>
  )
}
