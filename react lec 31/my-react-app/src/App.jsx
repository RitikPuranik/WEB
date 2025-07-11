import React from 'react'

const App = () => {

  function fun(){
    console.log('hello')
  }

  return(
    <div>
      <button onClick={fun}>click me</button>
    </div>
  )




  // let arr=[1,2,3,4,5]
  // return (
  //   <div>App
  //     {
  //       arr.map((a,b,c)=>{
  //         return(<>
  //           <h1>{a}</h1>
  //         </>)
  //       })
  //     }
      
  //      </div>
  // )



}


// const Home = () => {
//   return (
//     <div>Home</div>
//   )
// }


// export {Home}
export default App