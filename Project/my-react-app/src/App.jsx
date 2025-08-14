import React from 'react'
import ApiShowData from './ApiShowData'
import { Route, Routes } from 'react-router-dom'
import Cart from './Cart'
import Form from './Form'

const App = () => {
  return (
    <div>
     
      {/* <Routes>
        <Route  path='/' element ={<ApiShowData/>}/>
        <Route  path='/cart' element ={<Cart/>}/>
      </Routes> */}
      <Form />
    </div>
  )
}

export default App