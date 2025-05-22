//TO PRINT THE PRIME NUMBER IN ARRAY
let arr=[2,3,4,5,6,7]
let data=arr.filter((a)=>{
    if(a==2){
        return a
    }
    else{
        for(let i=2;i<a;i++){
            if(a%i==0){
                break;
            }
            else{
                return a
            }
        }
    }
})
console.log(data)


//TO PRINT THE NUMBER STARTING WITH 'A' OR 'a' IN ARRAY
let arr1=["Alice","bob","Ankit","charlie"]
let data1=arr1.filter((a)=>{
    return a.toLowerCase().startsWith("a")
})
console.log(data1)


//TO PRINT THE EVEN LENGTH STRING IN ARRAY
let arr2=["one","three","four","six"]
let data2=arr2.filter((a)=>{
    return a.length%2==0
})
console.log(data2)