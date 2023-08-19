import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='flex flex-col bg-black text-white justify-between items-center  w-[5em]'>

      <div className='items-center' >
        <img className='items-center' src="/vite.svg" alt="" />
        <div className=' flex gap-10 p-6 flex-col'>

          <i class="fa-solid fa-square-full"></i>  <Link to='/Course'><i class="fa-solid fa-building-columns"></i></Link><i class="fa-solid fa-certificate"></i><i class="fa-regular fa-pen-to-square"></i><i class="fa-solid fa-user"></i>
        </div></div>
      <div className='flex flex-col gap-10'>
        <i class="fa-solid fa-gear"></i><i><i class="fa-solid fa-right-from-bracket"></i></i>
      </div>
    </div>
  )
}

export default Navbar