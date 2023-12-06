import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function SignUp() {
  const [form , setForm] = useState({})
  const [error , setError] = useState('')
  const [loader , setLoader] = useState(false)
  const navigate = useNavigate()

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
   e.preventDefault()
   setLoader(true)
  
    const res= await fetch('http://localhost:3000/api/auth/signup',{
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
navigate('/signin')

}catch {

  setForm({})
  setError('')
  setLoader(false)

}

  }
  return (
    <div className='p-3 max-w-lg mx-auto'>
     <h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>
     <form  onSubmit={handleSubmit}   type='text' placeholder='username' className='flex flex-col gap-4'>

     <input type='text' onChange={handleChange} placeholder='username'
       className='border p-3 rounded-lg' id='username'
       />

        <input type='text' onChange={handleChange} placeholder='email'
       className='border p-3 rounded-lg' id='email'
       />
       
       <input type='text' onChange={handleChange} placeholder='password'
       className='border p-3 rounded-lg' id='password'
       />

<button disabled={loader} className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>{loader ? 'Loading...' : 'Sign Up'}</button>

     </form>
<div className='flex gap-2 mt-5'>
<p>Already have an account?</p>
<Link to='/signin'>
  <span className='text-blue-700'>Sign In</span>
</Link>
</div>
<div className='text-red-500'>{error ? error : ''}</div>

    </div>
  )
}

export default SignUp
