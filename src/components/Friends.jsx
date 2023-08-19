import React from 'react'

const Friends = () => {
  return (
    <div className='p-7'>
      <h1 className='font-semibold text-2xl'>friends</h1>
      <div className='bg-gray-200 rounded-xl gap-2 flex flex-col p-4'>

        <div className='flex flex-row justify-between border-b-4 border-gray-300  p-4 w-full'>
          <div className='flex flex-row w-full gap-4'>    <img src="/vite.svg" alt="" />
          <h2>Connect with other musicians</h2></div>
      
          <h4 className='bg-white p-2 rounded-2xl w-[5em] text-center'>profile</h4>

        </div>
        <div className='flex flex-row justify-between border-b-4 border-gray-300 p-4 w-full'>
          <div className='flex flex-row w-full gap-4'> <img src="/vite.svg" alt="" />
          <h2>Discover talented musicians </h2></div>
         
          <h4 className='bg-white p-2 rounded-2xl w-[5em] text-center'>profile</h4>

        </div>
        <h2 className='bg-white p-2 rounded-2xl w-[5em] text-center'>Explore</h2>
      </div>

 <div className='flex flex-row w-full py-6 justify-around'>

  <button className='bg-black text-white w-1/3 rounded-2xl h-10'>Find friends</button>
  <button className='bg-black text-white w-1/3 rounded-2xl h-10'>Invite friends</button>
 </div>

    </div>
  )
}

export default Friends