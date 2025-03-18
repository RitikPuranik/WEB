//Age is 26 above to learning dl, 18 above to dl, else ride bicycle

function myFunction(age){
    if(age<=16){
        console.log("person not eligible to dl");
        
    }
    else if(age>16 ){
        if(age=18){
            console.log("person learning to dl")
        }
        else{
            console.log("ride bicycle");
            
        }
    }
}
myFunction(18)

// // Age - 16 above to learing dl, 18 above to dl, else ride bicycle
// // Function - age param

// // function getAge(age) {
// //   if (age >= 18){
// //     console.log("You can have a dl");
// //   }else if (age >= 16) {
// //     console.log("You can have a learning dl");
// //   } else {
// //     console.log("You can ride a bicycle");
// //   }
// // }

// Function (arguments/parameters)
function myFunction3(arg1, arg2, arg3) {
    console.log(arg1, arg2, arg3)
  }
  
  // const a = 10
  // const b = 20
  // const c = 30
  // c <= a + b
  
  
  function argFunction(arg1 = 0, arg2 = 0, arg3 = 0) {
    console.log(arg1, arg2, arg3)
  }
  
  // Hoisting
  // var 
  // let, const
  
  
  // printSquares(1)
  
  // function printSquares(from, size = 10) {
  //   for (let i = from; i <= from+size; i++) {
  //     console.log(i*i)
  //   }
  // }
  
  // console.log(something)
  
  
  var something = 10
  // printSomething()
  
  function printSomething() {
  
    var something = 10 // Local Variable
    console.log(something)
    something = 20
   
  }
  
  var my_something = 10
  
  function changeSomething(){
    my_something = 20
    console.log(my_something)
    my_something = 30
    console.log(my_something)
    my_something = 40
    console.log(my_something)
  }
  changeSomething()
  console.log(my_something)
  
  
  // Excecution Context
  // Function -> Execution Context
  // Global -> Global Execution Context
  
  // Function - Distance - (speed, time)
  // Function - DistanceV2 - (initial_speed, time, acceleration)
  
  
  
  // Two Variables and One Variable