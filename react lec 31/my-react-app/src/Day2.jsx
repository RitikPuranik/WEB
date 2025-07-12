// import React, { useState } from 'react'


// //functional component static in nature


// const Day2 = () => {
//     let intialValue =0;

//     const [count, SetCount] = useState(intialValue)
//     const [color, setcolor] = useState(true)


//     function fun1(){
//         SetCount(count+1)
//     }

//   return (
//     <div style={{backgroundColor:color?"red":"green",width:'96vw',height:'95vh',padding:'10px'}}>
//         <h1>{count}</h1>
//         <button onClick={fun1}>Increment</button>
//         <button onClick={()=>SetCount(count-1)}>Decrement</button>
//         <button onClick={()=>SetCount(0)}>Reset</button>
//         <button onClick={()=>setcolor(!color)}>lightgreen</button>
//     </div>
//   )
// }

// export default Day2





import React, { useState } from 'react';

const Day2 = () => {
  const [input, setinput] = useState("");

  function fun1(e) {
    setinput(e.target.value);
  }

  return (
    <div>
      <h2>{input}</h2>
      <input onChange={fun1} type='text' placeholder='enter your text' />
    </div>
  );
};

export default Day2;
