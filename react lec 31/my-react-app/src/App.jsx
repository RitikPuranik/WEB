import React from 'react'
import { Routes } from 'react-router-dom'
import { Link, Route } from 'react-router-dom'
import Day1 from './Day1'
import Day2 from './Day2'
import Day3 from './Day3'
import Day4 from './Day4'
import Day5 from './Day5'
import NavBar from './Navbar'
import Home from './Home'
import Contact from './Contact'

const App = () => {
  return (
    <div>
        {/* <Day1 /> */}
        {/* <Day2 /> */}
        {/* <Day3 /> */}
        {/* <Day4 /> */}
        {/* <Day5 /> */}
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path='/Contact' element={<Contact/>}/>
        </Routes>
    </div>
  )
}

export default App