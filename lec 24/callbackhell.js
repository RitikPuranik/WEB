// function callBack(a){
//     console.log('Hello');
//     setTimeout(()=>{
//         a()
//     },2000)
    
// }
// callBack(function outer(){

// })

// let arr=[1,2,3,4,5,6]
// arr.reduce((a,b,c,d)=>{
//     return a+b
// })

// function step1(fn){
//     setTimeout(()=>{
//         console.log('selcttttttt');
//         fn()
//     },5000)
// }
// function step2(fn){
//     setTimeout(()=>{
//         console.log('filterrrrr');
//         fn()
//     },5000)
// }function step3(fn){
//     setTimeout(()=>{
//         console.log('caption');
//         fn()
//     },5000)
// }
// step1(function(){
//     step2(function(){
//         step3()
//     })
// })

// let promise=new Promise((res,rej)=>{
//         let a=false
//         if(a){
//             res()
//         }
//         else{
//             rej()
//         }
// })
// console.log(promise,"heheheh ")


let p=new Promise((res,rej)=>{
    rej()
})
p.then(()=>{
    console.log('helooooo');
    
})
.catch(()=>{
    console.log('hiiiii');
})

async function call(){
    await step1()
    
}

