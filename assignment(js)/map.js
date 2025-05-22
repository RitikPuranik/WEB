//TO COVERT CELSIUS TO FAHRENHEIT
let arr=[0,20,30]
let data=arr.map((a)=>{
    return (a*9/5)+32
})
console.log(data)


//TO PRINT THE FIRST LETTER OF THE STRING IN ARRAY
let arr1=["apple","banana","cherry"]
let data1=arr1.map((a)=>{
    return a.slice(0,1);
})
console.log(data1)


//TO PRINT TH ELNGTH OF THE STRING IN ARRAY
let arr2=["hello","world","map"]
let data2=arr2.map((a)=>{
    return a.length;
})
console.log(data2)