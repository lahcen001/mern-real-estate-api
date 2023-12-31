import React from 'react'
import {BrowserRouter , Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import Signin from './pages/Signin'
import About from './pages/About'
import CreateListining from './pages/CreateListining'
import Header from './components/Header'
import Profile from './pages/Profile'
import PrivateRoute from './components/PrivateRoute'
export default function App() {
  return (
   <BrowserRouter>
   <Header/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/signup' element={<SignUp/>} />
    <Route path='/signin' element={<Signin/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/create' element={<CreateListining />}/>
    <Route element={<PrivateRoute/>}>
    <Route path='/profile' element={<Profile/>}/><Route/>
    </Route>
    
    
   
   </Routes>
   </BrowserRouter>
  )
}
