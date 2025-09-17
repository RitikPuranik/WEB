// import React from 'react'
// import ApiShowData from './ApiShowData'
// import { Route, Routes } from 'react-router-dom'
// import Cart from './Cart'
// import Form from './Form'

// const App = () => {
//   return (
//     <div>
     
//       {/* <Routes>
//         <Route  path='/' element ={<ApiShowData/>}/>
//         <Route  path='/cart' element ={<Cart/>}/>
//       </Routes> */}
//       <Form />
//     </div>
//   )
// }

// export default App




////Dyamic routing
////Usenavigate,useparams
// import React from 'react'
// import Home from './Home'
// import { Route, Routes } from 'react-router-dom'
// import UserDetails from './UserDetails'
// const App = () => {
//   return (
//     <div>
//       <Routes >  
     
//       <Route  path='/'   element={ <Home/>}/>
//       <Route  path='/user/:id'   element={ <UserDetails/>}/>

//       </Routes>
      
//     </div>
//   )
// }

// export default App





// //UseMemo or Usecallback and memo functionnn

// import React, { useMemo, useState } from 'react'

// const App = () => {
//   let [count,Setcount]=useState(0);

//   //with the help of useMemo we can avoid the re-rendering of the component
//   //useMemo is used to avoid the re-rendering of the component
//   //the for loop will be executed only once
//   let val=useMemo(()=>{
//     let data=0;
//     for(let i=0;i<1000000000;i++){
//       data+=i;
//     }
//     return data;
//   },[])
//   return (
//     <div>
//       {/* <h2>{val}</h2> */}
//       <h2 onClick={()=>Setcount(count+1)}>{count}</h2>
//     </div>
//   )
// }

// export default App




// //memo functionn
// //
// import React, { memo, useState } from 'react'

// const App = () => {
//   let [count,Setcount]=useState(0);
//   console.log("Parent render")
//   return (
    
//     <div>
//       <h1>{count}</h1>
//       <button onClick={()=>Setcount(count+1)}>click</button>
//       <MemoizedChild />
//     </div>
    
//   )
// }

// export default App

// //memo is used to avoid the re-rendering of the component
// //this component is used only once until and unless it is used by us
// //if prop has been passed to memo functon then the component will be run only when the prop has been changed
// let MemoizedChild=memo(function ChildApp(){
//   console.log("child render")
//   return(
//     <div>Child</div>
//   )
// })




// //CALLBACK FUNCTION
// import React, { memo, useCallback, useState } from 'react'

// const App = () => {
//   let [count, setCount] = useState(0)
//   let [state, setState] = useState(0)

//   console.log("apppp wali fileeeee");

//   //  let even=   useMemo(()=>{
//   //   return ()=>{
//   //     console.log("hello");
      
//   //   }
//   // },[])

//  let even=  useCallback(()=>{
//   console.log("hello");
//  },[])
//   return (
//     <div>
//       {/* <h1>{val}</h1> */}
//       <h1>appp</h1>
//       <h2 >{count}</h2>
//       <button onClick={() => setCount(count + 1)}>click</button>
//       <button onClick={() => setState(state - 1)}>--</button>

//       {/* <ChildApp /> */}
//       <MemoizedChild   even={even} />
//     </div>
//   )
// }

// export default App


//   let MemoizedChild=   memo(function ChildApp() {
//     console.log("childdddddd wali fileeeee");
//   return (
//     <div>Childddddd
//       <h2></h2>
//     </div>
//   )

// })  



