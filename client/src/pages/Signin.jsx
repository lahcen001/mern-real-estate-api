import React, { useReducer, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { signInStart, signInSuccess , signInFailure} from '../redux/user/userSlice'
function SignIn() {
  const [form , setForm] = useState({})

  const {loader ,error } = useSelector(state => state.user)
  const navigate = useNavigate()
  const dispatch  = useDispatch()

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
   e.preventDefault()
   setLoader(true)
  
    const res= await fetch('http://localhost:3000/api/auth/signin',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(form)
    })

    const data = await res.json()

    try {
if(data.success=== false){

  setError(data.message)
  setLoader(false)
 return 

}
setLoader(false)
setError('')
navigate('/')

}catch {

  setForm({})
  setError('')
  setLoader(false)

}

  }
  return (
    <div className='p-3 max-w-lg mx-auto'>
     <h1 className='text-3xl text-center font-semibold my-7'>Sign In</h1>
     <form  onSubmit={handleSubmit}   type='text' placeholder='username' className='flex flex-col gap-4'>

  
        <input type='text' onChange={handleChange} placeholder='email'
       className='border p-3 rounded-lg' id='email'
       />
       
       <input type='password' onChange={handleChange} placeholder='password'
       className='border p-3 rounded-lg' id='password'
       />

<button  type='submit' disabled={loader} className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>{loader ? 'Loading...' : 'Sign In'}</button>

     </form>
<div className='flex gap-2 mt-5'>
<p>dont have a account ?</p>
<Link to='/signup'>
  <span className='text-blue-700'>Sign Up</span>
</Link>
</div>
<div className='text-red-500'>{error ? error : ''}</div>

    </div>
  )
}

export default SignIn
