//HOISTING IS ONLY POSSIBLE WITH VAR AND LET BUT NOT CONST

// console.log(a)
// var a=5 

//output=> undefined
//INTERNAL WORKING
//var a
//a is undefined
//console.log(a)
//a=5




// console.log(b)
// let b=5 

//output=> ReferenceError: Cannot access 'b' before initialization
//INTERNAL WORKING
//let b
//b is undefined
//console.log(b)     ==>>b is in a zone called "TEMPORAL DEAD ZONE(TDZ)"this do not let before it is intialized
//b=5                ==>>The time period between the variable is declared and intialized is called "TEMPORAL DEAD ZONE(TDZ)"




// let c
// console.log(c)
// c=5 

//output=> undefined
//INTERNAL WORKING
//let c
//c is undefined
//console.log(c)     ==>>c is not in TDZ since it is intialized with undefined at the start not with any number at the start
//c=5



sum()
const sum=()=>{
    console.log("hello")
}
//OUTPUT=> UNCAUGHT ERROR: cannot access sum before initialization
//
//INTERNAL WORKING
//const sum
//sum is undefined            //
//sum=()=>{
//    console.log("hello")
//}
//sum()





