import React from 'react'

const Progress = () => {
  return (
    <div className='flex flex-col gap-2 text-start'>
      <h1 className='font-semibold text-2xl'>Your Progress</h1>
      <div className='flex flex-row w-full text-center p-4 gap-2 justify-between'>

        <div className=' gap-2 rounded-[19px] flex flex-col bg-gray-200 p-4 w-[12em]'>
          <div className='bg-white rounded-[10px] p-6 text-2xl'> <i className="fa-solid fa-check"></i></div>
          <h4>completed music</h4>
          <p>3</p>
        </div>
        <div className='gap-2 rounded-[19px] flex flex-col bg-gray-200 p-4 w-[12em]'>
          <div className='bg-white rounded-[10px] p-6 text-2xl'> <i className="fa-solid fa-hourglass-end"></i></div>
          <h4>Hours spent practicing</h4>
          <p>32</p>
        </div>
        <div className='gap-2 rounded-[19px] flex flex-col bg-gray-200 p-4 w-[12em]'>
          <div className='bg-white rounded-[10px] p-6 text-2xl'> <i className="fa-solid fa-trophy"></i></div>
          <h4>Skills mastered</h4>
          <p>7</p>
        </div>

      </div>
    </div>
  )
}

export default Progress
