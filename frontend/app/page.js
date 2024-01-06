import ThemeSwitch from '@/components/ThemeSwitch'
import React from 'react'

const Home = () => {
  return (
    <div className='min-h-screen min-w-screen dark:bg-gray-800 bg-gray-100 text-gray-800 dark:text-gray-100'>
      <ThemeSwitch />
      <h1>
      Home
      </h1>
    </div>
  )
}

export default Home