import React from 'react'

const Achievents = () => {
    return (
        <div className='flex flex-col gap-2 text-start'>
            <h1 className='font-semibold text-2xl'>Acchivements</h1>

            <div className='w-full bg-gray-200 rounded-[23px]  p-4 gap-2 items-center flex h-[7em]'>
                <i className='bg-white rounded-[10px] p-6 text-2xl'><i className="fa-solid fa-trophy"></i></i>
                <div className=' flex flex-col gap-4 w-full p-6'>
                    <div className='flex flex-row w-full justify-between'>
                        <h3>Committed Learner</h3>
                        <p>2/3 Courses</p>
                    </div>
                    <div className='h-3 w-full bg-gray-300'></div>
                    <p>maintain a 3-day practice streak</p>
                </div>
            </div>
            <div className='w-full bg-gray-200 rounded-[23px]  p-4 gap-2 items-center flex h-[7em]'>
                <i className='bg-white rounded-[10px] p-6 text-2xl'><i className="fa-solid fa-trophy"></i></i>
                <div className=' flex flex-col gap-4 w-full p-6'>
                    <div className='flex flex-row w-full justify-between'>
                        <h3>Point Collector</h3>
                        <p>1200/3000 Courses</p>
                    </div>
                    <div className='h-3 w-full bg-gray-300'></div>
                    <p>Earn 1800 more points</p>
                </div>
            </div>

        </div>
    )
}

export default Achievents