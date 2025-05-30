// //HIGHER ORDER FUNCTION
// function sum(fn){    //fn will be inner function as it 
//     fn()            //calling the inner function

// }
// sum(function inner(){
//     console.log("inner");
// })


// function outer(){
//     function fn(){

//     }
//     return fn

// }
// outer()



//QUESTION TO FILTER ALL THE ELEMENTS ACCORDING TO THEIR DATATYPES
// arr=[4,5,3,'hello','hiii',"byeeee",true,false]
// function number(){
//     let res=[]
//     for(let i of arr){
//         if(typeof i =="number"){
//             res.push(i)
//         }
//     } 
//     console.log(res)
// }
// function GetString(){
//     let res=[]
//     for(let i of arr){
//         if(typeof i == "string"){
//             res.push(i)
//         }
//     } 
//     console.log(res)
// }


//OPTIMIZED APPROACH
arr=[4,5,3,'hello','hiii',"byeeee",true,false]

function getString(i){
    return typeof i==="string"
}
function getNumber(i){
    return typeof i==="number"
}
function getBoolean(i){
    return typeof i==="boolean"
}

function get(arr,fn){
    let res=[]
    for(let i of arr){
        if(fn(i)){
            res.push(i)
        }
    }
    console.log(res)
}
get(arr,getString)
get(arr,getNumber)
get(arr,getBoolean)