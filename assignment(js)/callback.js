// // QUESTION1. Basic Callback Function:
// //Write a function `greet(name, callback)` that prints 'Hello, <name>' and then executes the callback
// //after 2 seconds using setTimeout.

// function greet(name, callback) {
//     console.log("Hello"+name);
//     setTimeout(() => {

//         callback();
//     }, 2000);
// }

// let data= prompt("enter your name");
// greet(data,()=>{
//     console.log("hello"+data);
// })



// // QUESTION 2. Callback Hell:
// // Convert the following nested callbacks into a Promise chain:
// // setTimeout(() => {
// //  console.log('Step 1');
// //  setTimeout(() => {
// //  console.log('Step 2');
// //  setTimeout(() => {
// //  console.log('Step 3');
// //  }, 1000);
// //  }, 1000);
// // }, 1000);

// let step1=function(){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             res("step1");
//         },1000)
//     })
// }
// let step2=function(){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             res("step2");
//         },1000)
//     })
// }
// let step3=function(){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             res("step3");
//         },1000)
//     })
// }
// let step4=function(){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             res("step4");
//         },1000)
//     })
// }

// step1().then((data)=>{
//     console.log(data);
//     return step2();
// }).then((data)=>{
//     console.log(data);
//     return step3();
// }).then((data)=>{
//     console.log(data);
//     return step4();
// }).then((data)=>{
//     console.log(data);
// })




//QUESTION 3. Create a Custom Promise:
// Write a function `isEven(number)` that returns a Promise. If the number is even, resolve with 'Even
// number', otherwise reject with 'Odd number'.

let n =prompt("enter a number")
n=Number(n)
function isEven(number){
    return new Promise((res,rej)=>{
        if(number%2==0){
            res("Even number")
        }
        else{
            rej("Odd number")
        }
    })
}
isEven(n).then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
})