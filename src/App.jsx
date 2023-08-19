import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Profile from './components/Profile'
import Progress from './components/Progress'
import Achievents from './components/Achievents'
import News from './components/News'
import Friends from './components/Friends'
// import Achievents from './components/Achievents'
import './App.css'
import Navbar from './components/Navbar'




function App() {


  return (
    <div className='flex flex-row w-full gap-6'>
      <Navbar />
      <div className='flex flex-row w-full' >
        <div className='w-1/2'>
          <Profile />
          <Progress />
          <Achievents />
        </div>
        <div className='w-2/2 w-full'>
          <News />
          <Friends />
        </div>
      </div >
    </div>
  )
}

export default App
