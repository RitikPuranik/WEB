import React, { useReducer, useState } from "react";

// const Day8 = () => {
//   function reducer(state, action) {
//     if (action.type === "add") {
//       return [...state, action.value];
//     }
//     return state;
//   }

//   const [data, dispatch] = useReducer(reducer, []);
//   const [input, setInput] = useState("");

//   return (
//     <div className="p-4">
//       <input
//         type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
//       <button onClick={() => {
//           if (input.trim() !== "") {
//             dispatch({ type: "add", value: input });
//             setInput("");
//           }
//         }}>Submit</button>

//       <ul>
//         {data.map((item, index) => (
//           <li key={index} className="text-black py-1">
//             {item}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };




const Day8 = () => {
    let intialValue={
        todos:[],
        input:""

    }
    function Reduser(state,action){
        if(action.type === "add"){
            return{
                ...state,
                input:action.payload.value
            }
        }
        else if(action.type==="ADD_TODO"){
            if(state.input.trim()==''){
                return state
            }
            else{
                return{
                    ...state,
                    todos:[...state.todos,state.input],
                    input:""
                }
            }

        }
        else if(action.type==="DELETE_TODO"){
            return{
                ...state,
                todos:state.todos.filter((item,index)=>{
                    return index!==action.payload.index
                })
            }
        }
    }

    const [state,dispatch]=useReducer(Reduser,intialValue)
  return (
    <div>
        <input type="name" value={state.input} onChange={(e)=>{dispatch({type:"add",payload:{value:e.target.value}})}} />
        <button onClick={()=>{dispatch({type:"ADD_TODO"})}}>Submit</button>
        {
            state.todos.map((item,index)=>{
                return(
                    < ul key={index}>
                        <li className="text-black py-1">{item}</li>
                        <button onClick={()=>{dispatch({type:"DELETE_TODO",payload:{index}})}}>X</button>
                    </ul>
                )
            })

        }
    </div>
  )
}


export default Day8;
