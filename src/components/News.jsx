import React from 'react'

const News = () => {
  return (
    <div className='flex flex-col gap-2 p-7 text-start'>
      <h1 className='font-semibold text-2xl'>Latest News</h1>
      <div className='bg-gray-200 rounded-xl gap-2 flex flex-col p-4'>

        <div className='flex flex-row justify-between border-b-4 border-gray-300 p-4 w-full'>

          <div className='flex flex-row  gap-8'>
            <img src="/vite.svg" alt="" />
            <h2>Learn the basics of music theory </h2></div>
          <div className='flex flex-row gap-8'> <i><i class="fa-solid fa-plus"></i></i>
            <i><i class="fa-solid fa-xmark"></i></i>
            </div>


        </div>
        <hr />
        <div className='flex flex-row justify-between border-b-4 border-gray-300 p-4 w-full '>

          <div className='flex flex-row gap-8 '>
            <img src="/vite.svg" alt="" />
            <h2>Learn the basics of music theory </h2>
          </div>
          <div className='flex flex-row gap-8'>
            <i><i class="fa-solid fa-plus"></i></i>
            <i><i class="fa-solid fa-xmark"></i></i>
          </div>

        </div>
        <hr />
        <h2 className='bg-white p-2 rounded-2xl w-[5em] text-center' >Explore</h2>
      </div>

    </div>
  )
}

export default News