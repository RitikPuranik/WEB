let arr=[1,2,2,3,4,4,5,556];

//FIRST REPEATING NUMBER
let arr1=[];
for(let i=0;i<arr.length;i++){
    if(arr1.includes(arr[i])){
        console.log(arr[i]);
    }else{
        arr1.push(arr[i]);
    }
}
//FIRST NON REPEATING NUMBER
let flag = true;
for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]==arr[j]){
            flag=false;
            break;
        }
    }
    if(flag){
        console.log(arr[i]);
    }
}

let a=5
function sum(){
    let data1=a;
    function inner(){
        console.log(data1);
    }
    // inner()
    return inner
}
let data=sum()
data() 