import React from 'react'
import { useSelector } from 'react-redux'
function Profile() {
  const {currentUser} = useSelector(state => state.user)
  return (
    <div  className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl font-semibold text-center my-7'>Profile</h1>
      <form  className='flex flex-col gap-2' action="">
        <img src={currentUser.avatar} alt="profile"
         className="rounded-full w-24 h-24 obeject-cover cusrsor-pointer self-center mt-2"/>
        
       <input type="text" placeholder='Username' className='border rounded-lg p-2 my-2' />
       <input type="email" placeholder='Email' className='border rounded-lg p-2 my-2' />
       <input type="password" placeholder='Password' className='border rounded-lg p-2 my-2' />


       <button className='bg-blue-700 text-white rounded-lg p-2 my-2 uppercase hover:opcacity-95  disabled:opacity-80'>Update</button>
      </form>
      <div className='flex justify-between mt-5'>
        <span className='text-red-700 cursor-pointer'>Delete Account</span>
        <span className='text-red-700 cursor-pointer'>Sign out</span>
      </div>
    </div>
  )
}

export default Profile
