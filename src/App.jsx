import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './components/pages/HomePage.jsx'

const App = () => {
  return (
    <>
      <div className='font-serif'>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </>
  )
}

export default App