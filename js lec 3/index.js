// let arr=[1,2,3,4,5,"hello",false];
// console.log(arr[0])
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }
// for in loop


//function
// function sum(a=20,b=293){
//     console.log(a+b);
// }
// sum(5,6); 

//arrow function
// let show=(a,b)=>{
//     console.log(a+b);
// }
// show(2,5);

// function check(a){
//     if(a%2==0){
//         console.log("even");
//     }
//     else{
//         console.log("odd");
//     }
// }
// check(5)
// check(2)
// let check2=(b)=>{
//     if(b%2==0){
//         console.log("even");
//     }
//     else{
//         console.log("odd");
//     }
// }
// check2(5)
// check2(2)

// for(let i=9;i<0;i--){
//     console.log(i)
// }


//print array
// let arr=[1,2,3,4,5,6,67,8]
// for(let i=arr.length-1;i>=0;i--){
//     console.log(arr[i])
// }
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i])
// }


// NUMBER GREATER THAN 3
// let arr=[1,2,3,4,5,6,67,8]
// arr.push(100)
// let arr2=[]
// for(let i=0;i<arr.length;i++){
//     if(arr[i]>3){
//         arr2.push(arr[i])
//     } 
// }
// console.log(arr2)


//GREATEST ELEMENT IN ARRAY
// let arr=[1,2,3,4,5,6,67,8]
// let a=0;
// for(let i=0;i<arr.length;i++){
//     if(a>arr[i]){
//         a=arr[i]
//     }
// }
// console.log(a)


//  let arr=[1,2,3,4,5,6,67,8]
//FOR PRINTING ELEMENTS OF ARRAY
// for(let i of arr){
//     console.log(i)
// }
//FOR PRINTING INDEXES OF ARRAY
// for(let i in arr){
//     console.log(i)
// }


// let arr=[1,2,3,4,5,6]
// let count=0;
// function sum(data){
//     for(let i of arr){
//         count=count+i
//     }
//     console.log(count)
// }
// sum(arr)

// let arr=[{id:1,name:"rahul"},{id:2,name:"mohit"}]
// for(let i of arr){
//     console.log(i.name)
// }


// let obj={
//     id:1,
//     name:"rahul",
//     age:20,
// }
// function Submit(data){
//     console.log(data.id)
// }
// Submit(obj)

// let obj={
//     id:1,
//     name:"rahul",
//     lastName:"jain",
//     fullName:function(){
//         console.log(obj.name+" "+obj.lastName)
//     }
// }                                   
// obj.fullName()



// let arr=[1,2,3,4,5,6]
// arr.push(100)            //add element at last position
// console.log(arr)
// arr.pop()                //remove last element
// console.log(arr)         
// arr.unshift(10)          //add element at first position
// console.log(arr)
// arr.shift()              //remove first element
// console.log(arr)



// CALLBACK FUNCTION
// let arr=[1,2,3,4,5]
// let target=3;
// arr.find((a,b,c)=>{
//     return a==target
// })
// console.log(data);



//function do not compile after it return something
// function sum(){
//     return 5
//     console.log("hello")
// }
// console.log(sum())