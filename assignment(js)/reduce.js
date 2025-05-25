//COUNT THE FREQUENCY OF EACH ELEMENT IN ARRAY
let arr=["a","b","a","c","b"]
let frequency=[]
let count =0;
let data =arr.reduce((a,b)=>{
    if(frequency.includes(b)){
    }
    else{
        frequency.push(b)
        for(let i=0;i<arr.length;i++){
            if(b==arr[i]){
                count++
            }
        }
        frequency.push(count);
        count=0;
    }
    return frequency
},[])
console.log(data)


//TO PRINT THE CONCATENATION OF GIVEN ARRAY
let arr1=["hello","world","from","reduce"]
let data1 =arr1.reduce((a,b)=>{
    return a+b
})
console.log(data1)


//TO FINFD THE AVERAGE OF GIVEN ARRAY
let arr2=[10,20,30]
let data2 =arr2.reduce((a,b)=>{
    return a+b
})
console.log(data2/arr2.length)


//TO PRINT THE VOWEL COUNT IN GIVEN ARRAY
let arr3=["apple","banana"]
let vowel=['a','e','i','o','u']
let output=[]
let data3=arr3.reduce((a,b)=>{
    let count=0
    for(let i=0;i<b.length;i++){
        if(vowel.includes(b[i])){
            count++
        }
    }
    output.push(b+"=>"+count)
    return output
},0)
console.log(data3)
