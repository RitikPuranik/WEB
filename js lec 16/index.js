//Async Programming

//web api

// setTimeout(()=>{
//     console.log("hello")

// },0)                          //hii prints first even after hello have time interval because set time out is async and the global one will get higher priority
// setTimeout(()=>{
//     console.log("bye")

// },10)
// console.log("hiiii")

// for(let i=0;i<=5;i++){
//     setTimeout(()=>{
//     console.log(i);

// },i*1000)
// }



// function print(i){
//     setTimeout(()=>{
//         console.log(i);
//     },1000*i)
// }
// for(var i=1;i<=5;i++){
//     print(i)
// }


// let arr=[1,2,3,4,5]
// for(var i=0;i<=arr.length;i++){
//     setTimeout(()=>{
//         console.log(arr[i]);
//     },1000*i)
// }


// var a=3;
// function foo(){
//     console.log(a);
//     console.log(bar());
//     var a=5;
//     function bar(){
//         return 4;
//     }
// }
// foo();

setInterval(() => {
    let time=new Date().toLocaleTimeString()
    console.log(time)
}, 1000);
