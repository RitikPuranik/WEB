import React, { useEffect, useState } from 'react'
import './Day5.css'
const Day5 = () => {

    let [input ,SetInput]=useState([]);
    useEffect(()=>{
        // console.log("hello");
        fetch('https://jsonplaceholder.typicode.com/todos').
        then((res)=>{
            return res.json()

        }).then((data)=>{
            SetInput(data)
            console.log(data);
            
        })
        
    },[])
// index=3
    function d(index){
       let nerArr=   input.filter((a)=>{
            return a.id!=index

        })
        SetInput(nerArr)
        // console.log(nerArr, "heheheheh");
    }

    function SaveData(data){
        localStorage.setItem("data",JSON.stringify(data))
    }

    function deleteFromLocalS(id) {
        let saveData = JSON.parse(localStorage.getItem("data")) || [];
        let newArr = saveData.filter((a) => a.id !== id);
        localStorage.setItem("data", JSON.stringify(newArr)); 
    }

    
  return (
    <div>
        {/* <button onClick={()=>SetCount(count+1)}> count {count}
        </button> */}
        <div id='parent_Card'>  
        {
            input.map((a,index)=>{
                return(<div id='card'  
                // onClick={()=>d(a.id)} 
                >
                <h1>{a.id}</h1>
                <button onClick={()=>{SaveData(a)}}>add</button>
                <button onClick={()=>{deleteFromLocalS(a.id)}}>delete</button>
                </div>)
            })
        }
         </div>
    </div>
  )
}

export default Day5
