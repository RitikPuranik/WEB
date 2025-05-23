// let arr =[1,2,3,4,5,6,7,8]

// for(let i in arr){
//     console.log(i)
// }
// for(let i of arr){
//     console.log(i)
// }


//FOR EACH LOOP
//=>IT DOES NOT CREATE A ARRAY IT ONLY MODIFIES THE GIVEN ARRAY
// arr.forEach((a,b,c)=>{
//     console.log(a)          // 1 2 3 4 5 6 7 8
//                             //PRINT THE ELEMENTS OF ARRAY
// });
// arr.forEach((a,b,c)=>{
//     console.log(b)          // 0 1 2 3 4 5 6 7
//                             //PRINT THE INDEX OF ELEMENTS OF ARRAY
   
// });
// arr.forEach((a,b,c)=>{
//     console.log(c)          // [1,2,3,4,5,6,7,8]
//                             //PRINT THE ARRAY OBJECT

// });


// MAP FUNCTION LOOP
//IT DOES CREATE A NEW ARRAY AND THEN OPERATE THE GIVEN CONDITION
// arr.map((a,b,c)=>{
//     console.log(a)          // 1 2 3 4 5 6 7 8
//                             //PRINT THE ELEMENTS OF ARRAY
// });
// arr.map((a,b,c)=>{
//     console.log(b)          // 0 1 2 3 4 5 6 7
//                             //PRINT THE INDEX OF ELEMENTS OF ARRAY
// });
// arr.map((a,b,c)=>{
//     console.log(c)          // [1,2,3,4,5,6,7,8]
//                             //PRINT THE ARRAY OBJECT
// });



// let data=arr.forEach((a,b,c)=>{
//     return a;                     //UNDEFINED
//                                   //IT DOES NOT CREATE A NEW ARRAY
// })
// let data1=arr.map((a,b,c)=>{
//     return a;                     //1 2 3 4 5 6 7 8
//                                   //BEACUSE IT DOES CREATE A NEW ARRAY
// })
// console.log(data)
// console.log(data1)


// console.log(data1==arr)            //DATA1 CREATE A NEW ARRAY SO NEW ADDRESS WILL BE THERE SO ANSER WILL BE FALSE



//FILTER FUNCTION
// let arr=[1,2,3,4,5,6,7,8]
// //IT GIVES THE OUTPUT WITH VALUES WHICH ARE NOT GREATER THAN 3 BY "TRUE" AND "FALSE"
// let data1=arr.map((a,b,c)=>{
//     return a
// })
// console.log(data1)
// //IT ONLY GIVES VALUE GRREATER THAN 3
// let data= arr.filter((a,b,c)=>{
//     return a>3
// })
// console.log(data)



//REDUCE FUNCTION
//IT GIVES THE OUTPUT WITH THE SUM OF ALL THE ELEMENTS OF ARRAY
// let arr=[1,2,3,4,5,6,7,8]
// let sum =arr.reduce((a,b,c,d)=>{
//     return a+b                  //a=a+b
// },10)                       //10=10+11=>sets value of a=10 and value of b at starting of index of array
// console.log(sum)



// //TO FIND THE MINIMUM VALUE IN ARRAY
// let arr=[1,2,3,4,5,6,7,8]
// let data =arr.reduce((a,b,c,d)=>{
//     return a<b?a:b
// })
// console.log(data);
// //TO FIND THE MAXIMUM VALUE IN ARRAY
// let arr1=[1,2,3,4,5,6,7,8]
// let data1 =arr.reduce((a,b,c,d)=>{
//     return a>b?a:b
// })
// console.log(data1);



// //TO FINF THE SUM OF EVEN VALUES GREATER THAN 3 IN ARRAY
// let arr=[2,3,2,3,42,4,32,,5,2,5,7]
// let data=arr.filter((a,b,c)=>{
//     return a>3
// })
// console.log(data);
// let data1=data.filter((a,b,c)=>{
//     return a%2==0
// })
// console.log(data1)
// let sum =data1.reduce((a,b,c,d)=>{
//     return a+b                  
// })  
// console.log(sum)

//REDUCED VERSION OF QUESTION ABOVE
let data=arr.filter((a)=>{
    return a>3
}).filter((b)=>{
    return b%2==0
}).reduce((a,b)=>{
    return a+b                  
})  
console.log(data);
