// //SOME FUNCTION
// //==>IF ANY CONDITION MATCH THE ANSWER WILL BE 'TRUE' ELSE 'FALSE
// let arr=[1,2,3,4,6,7]
// let data=arr.some((a)=>{
//     return a==5
// })
// console.log(data)
// //OUTPUT: false




// //EVERY FUNCTION
// //==>IF ALL CONDITION MATCH THE ANSWER WILL BE 'TRUE' ELSE 'FALSE'
// let arr1=[1,2,3,4,4,5,6,7,3]
// let data1=arr1.every((a)=>{
//     return a==5
// })
// console.log(data1)
// //OUTPUT: false




// //FIND FUNCTION
// //==>IT RETURN FIRST ELEMENT THAT MATCH THE CONDITION
// let arr2=[1,2,3,4,4,5,6,7,3]
// let data2=arr2.find((a,b,c)=>{
//     return a==3
// })
// console.log(data2)
// //OUTPUT: 3
// let data3=arr2.filter((a,b,c)=>{
//     return a==3
// })
// console.log(data3)
// //OUTPUT: [3,3]




// let arr=[1,2,3,4,4,5,6,7,3]

// //INCLUDES GIVES TRUE OR FALSE
// console.log(arr.includes(5))
// //OUTPUT: true
// console.log(arr.includes(10))
// //OUTPUT: false

// // INDEXOF GIVES THE INDEX OF ELEMENT 
// console.log(arr.indexOf(100));
// //OUTPUT: -1
// console.log(arr.indexOf(3));
// //OUTPUT: 2



//TO FIND THE 2ND LARGEST GREATER NUMBER IN A ARRAY
// let arr=[1,2,3,4,4,5,6,,7,3]
// let maxValue=arr.reduce((a,b)=>{
//     return a>b?a:b
// })
// let newArr=arr.filter((a,b)=>{
//     return a!==maxValue
// }).reduce((a,b)=>{
//     return a>b?a:b
// })
// console.log(newArr)




//TO MERGE ARRAYS
// let arr=[1,2,3,4,4,5,6,7,3]
// let arr1=[1,2]
// let arr2=[]
// for(let i of arr){
//     arr2.push(i)
// }
// for(let i of arr1){
//     arr2.push(i)
// }
// console.log(arr2)




// //SPREAD OPERATOR
// let arr=[1,2,3,4,4,5,6,7,3]
// let arr1=[1,2]
// let arr2=[...arr,...arr1]
// console.log(arr2)




// //LUCKY NUMBER GAME
// let b=prompt("enter a number")
// let a=Math.floor(Math.random()*100)
// if(b==a){
//     console.log("you win")
// }
// else if(b>a){
//     console.log("your number was greater than the number")
// }
// else{
//     console.log("your number was less than the number")
// }




//TO FIND THE GRETEST SUM OF ANY 3 NUMBERS
let arr=[-3,0,3,5,5,2,0,1]
let maxValue=arr.reduce((a,b)=>{
    return a>b?a:b
    //RETURN MAX VALUE
})
let arr1=arr.filter((a)=>{
    return a!==maxValue
    //TO REMOVE MAX VALUE
})
let maxValue1=arr1.reduce((a,b)=>{
    return a>b?a:b
    //RETURN SECOND MAX VALUE
})
let arr2=arr1.filter((a)=>{
    return a!==maxValue1
    //TO REMOVE SECOND MAX VALUE
})
let maxValue2=arr2.reduce((a,b)=>{
    return a>b?a:b
    //RETURN THIRD MAX VALUE
})
console.log(maxValue+maxValue1+maxValue2)
