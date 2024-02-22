import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Gallery from './Gallery'
import Contact from './Contact'
import Abouts from './Abouts'

const AllRouter = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/gallery' element={<Gallery />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/about' element={<Abouts />} />

        </Routes>
    </div>
  )
}

export default AllRouter