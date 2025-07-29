import React, { useReducer } from 'react'

const Day7 = () => {
    function Reduser(state,action){
        if(action.type==='increment'){
            return state+1
        }
        else if(action.type==='decrement'){
            return state-1
        }
        else if(action.type==='reset'){
            return 0
        }
        else{
            return
        }
        
        
    }
    let[count,dispatch]=useReducer(Reduser,0)
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>dispatch({type:'increment'})}>Increment</button>
        <button onClick={()=>dispatch({type:'decrement'})}>Decrement</button>
        <button onClick={()=>dispatch({type:'reset'})}>Reset</button>


    </div>
  )
}

export default Day7