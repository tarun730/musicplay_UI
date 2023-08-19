import React from 'react'

const Profile = () => {
  return (
    <div className='flex flex-row gap-8 w-full justify-around'>
        <img src="/vite.svg" alt="profile pic" />
        <div className='flex flex-col gap-2 text-start'>
            <h1 className='text-4xl font-bold '>John Smith</h1>
            <p> stay updated with latest music news</p>
            <div className='text-center flex flex-row gap-6 border-gray-200 rounded-[27px] border-[1em] p-2 '>
                <div className='   p-2 flex flex-col'>
                    <h2 className='text-lg font-semibold'>Beginner</h2>
                    <p>practice</p>
                </div>
                <div className=' p-2 flex flex-col'>
                    <h4>2</h4>
                    <p>connect with</p>
                </div>
                <div className=' p-2 flex flex-col'>
                    <h2 className='text-lg font-semibold'>Intermediate</h2>
                    <p>follow your</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile