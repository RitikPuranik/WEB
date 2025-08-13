import React, { useContext } from 'react'
import { Context } from './Context'
import './ApiShow.css'

const Cart = () => {
    let {state,dispatch}=    useContext(Context)
    console.log(state,"kya mil rha haiii");
    
  return (
    <div id='parent_Card'>
    {
        state.cartData.map((a,index)=>{
            return(<div id='card'  >
                <img  src={a.image}/>
                <p>{a.name}</p>
                <h2>{a.quantity}</h2>
                <button onClick={()=>dispatch({type:"increment" ,payload:a.id})}>+</button>
                <button onClick={()=>dispatch({type:"decrement" ,payload:a.id})}>-</button>
                <button onClick={()=>dispatch({type:"delet",payload:index})}>Remove</button> 
            </div>)
        })
    }
    </div>
  )
}

export default Cart