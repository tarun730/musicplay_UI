import React from 'react'
import Navbar from './Navbar'

const Course = () => {
  return (
    <div className='flex flex-row  '>

<div className='flex flex-col bg-black text-white justify-between items-center  w-[5em]'>

<div className='items-center' >
<img src="/vite.svg" alt="" />
<div className=' flex gap-10 flex-col'>

<i class="fa-solid fa-square-full"></i> <i class="fa-solid fa-building-columns"></i><i class="fa-solid fa-certificate"></i><i class="fa-regular fa-pen-to-square"></i><i class="fa-solid fa-user"></i>
</div></div>
<div className='flex flex-col gap-10'>
<i class="fa-solid fa-gear"></i><i><i class="fa-solid fa-right-from-bracket"></i></i>
</div>
</div>
      <div className='w-full'>

        <div className='gap-5 w-full bg-gray-100 items-center flex justify-between flex-row p-8' >
          <input type="text" className='p-4 rounded-3xl w-1/2' placeholder='Search for a music theory or practice' />
          <div className='flex flex-row gap-5' > <p>Start learning</p>
            <i>music</i><i>spiker</i>
            <img src="/vite.svg" alt="" /></div>

        </div>
        <div className='flex flex-row p-6'>
          <div className='w-full' >
            <h1  className='text-3xl p-4 font-semibold'>Notification</h1>
            <div className='flex flex-row gap-6'>
            <div className='bg-gray-200 flex flex-col gap-5 h-[30em] w-4/5 p-8 rounded-3xl' >
              <div className='flex flex-row  w-full justify-between' >
                <h2 className='text-xl font-semibold'>New updates</h2>
                <input className='p-2 rounded-lg' type="text" name="filter" placeholder='filter by date' id="" />
              </div>
              <div className='flex w-full justify-between p-4 flex-row'>
                <div className='flex gap-10 justify-between flex-row'>
                  <img src="/vite.svg" alt="" />
                  <div >
                    <h3>john Smith</h3>
                    <p>on lesson- basics</p>
                    <p> great explation, thanks</p>
                    <div className=' flex gap-5'>
                      <span>like</span><span>reply</span>
                    </div></div>
                </div>
                  <p>1h ago</p>

              </div>
              <div className='flex w-full justify-between p-4  flex-row'>
                <div className='flex gap-10 justify-between flex-row'>   <img src="/vite.svg" alt="" />
                <div><h3>Sarah Johnson</h3>
                  <p>on lesson - Chords</p>
                  <p>Awesome progress ,keep it up !</p>
                  <div className=' flex gap-5'>
                    <span>like</span><span>reply</span>
                  </div>
                  </div></div>
              
                <p>2h ago</p>
              </div>

            </div>
          <div className='flex h-[auto] flex-col text-center bg-gray-200 gap-10 w-[25em] p-5 font-semibold rounded-3xl'>
            <h2>Fliter option</h2>
            <div className='flex flex-col'>
              <label htmlFor="Comments"> Comments <input type="checkbox" defaultChecked></input></label>
              <label htmlFor="Likes"> Likes <input type="checkbox" defaultChecked></input></label>
              <label htmlFor="Reviews"> Reviews <input type="checkbox" defaultChecked></input></label>
              <label htmlFor="Mentions"> Mentions <input type="checkbox" defaultChecked></input></label>
              <label htmlFor="Purchases"> Purchases <input type="checkbox" defaultChecked></input></label>
              <label htmlFor="Message"> Message <input type="checkbox" defaultChecked></input></label>
            </div>
            <div className='w-full flex flex-row justify-between text-center gap-7'>
              <span className='bg-white rounded-xl w-full'>Select all</span>
              <span className='bg-white rounded-xl w-full'>Unselect all</span>
            </div>
          </div></div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Course