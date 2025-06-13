// //PROMISES
// let step1=function(){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             res("selct a photo");
//         },5000)
//     })
// }

// let step2=function(){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             res("filterrrr");
//         },4000)
//     })
// }

// let step3=function(){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             res("enter captions");
//         },3000)
//     })
// }

// let step4=function(){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             res("postt");
//         },2000)
//     })
// }
//callbackHell => promises => async await

// step1().then((data)=>{
//     console.log(data);
//     return step2()
// }).then((filter)=>{
//     console.log(filter);
//     return step3()
// }).then((cap)=>{
//     console.log(cap);
//     return step4()
// }).then((post)=>{
//     console.log(post);
// })



// //async await
// async function call() {
//     let data = await step1();
//     console.log(data);
//     console.log("hello");
//     let filter = await step2();
//     console.log(filter);
//     let cap = await step3();
//     console.log(cap);
//     let post = await step4();
//     console.log(post);
// }
// call();




