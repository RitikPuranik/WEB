import React, { useState,useReducer } from 'react' 
import './Form.css'

const initialState={
    data:[]
}
function reduser (state,action){

}

const Form = () => {
  const [first, setFirst] = useState(false)
  const [state, dispatch] = useReducer(reduser, initialState);

  return (
    <div>
      <div  id='header'><h1>Contact Manager</h1></div>

      <div>
        <button id='create' onClick={() => setFirst(true)}>Create New Contact</button>
        {first && (
          <div id='form'>
            <div id='line'><h1>Name :</h1> <input type="text" name="name" /></div>
            <div id='line'><h1>Email :</h1> <input type="email" name="email" /></div>
            <div id='line'><h1>Phone No :</h1> <input type="number" name="phone" /></div>
            <div id='line'><h1>Address :</h1> <input type="text" name="address" /></div>
            <button onClick={() => setFirst(false)}>Submit</button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Form
