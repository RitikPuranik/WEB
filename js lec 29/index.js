// REST OPERATOR

//RESR OPERATOR IN OBJECT
// const obj={
//     name:"hello",
//     lastName:"vohra"
// }
// let obj1={
//     ...obj,
//     age:15
// }
// console.log(obj1);



//REST OPERATOR IN ARRAY
// let arr=[1,2,3,4,5,56]
// let arr2=[2,3,4,5,...arr]
// console.log(arr2);



//REST OPERATOR IN FUNCTION(REST PARAMETER)
// function sum(...data){
//     console.log(data)
// }
// sum(1,2,3,4,5,6,7,8,91,2,3,4,5,66,7)



// let obj={
//     age:16,
//     id:1
// }
// let{age,id}=obj
// console.log(age,id);


// let arr=[1,2,3,4,5,6]
// let [a,b,c]=arr
// console.log(a,b,c);




// //FIRST CLASS FUNCTION
// let sum=function(){
//     console.log("hello")
// }
// sum()



// //PURE FUNCTION
// //the values of function who does not change in every call with the same input
// function add(a,b){
//     return a+b
// }
// console.log(add(5,6))
// console.log(add(5,6))



// //IMPURE FUNCTION
// //the funtion whose values changes on every call with the same input
// let count=0;
// function incremnet(){
//     count++;
//     return count
// }
// console.log(incremnet(),"Impure functionsss")
// console.log(incremnet(),"Impure functionsss")
// console.log(incremnet(),"Impure functionsss")





// //FUNCTION CURRING
// //function returning another function
// function add(a){
    
//     return function(b){
//         console.log(a+b);

//     }
// }
// add(2)(3)





// import{user ,share} from "./home.js"
// console.log(user)
// share(2,3)



import{user} from "./home.js"
console.log(user)
import a from './home.js'
a(5,4)







