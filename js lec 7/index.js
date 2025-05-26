// 1D ARRAY
// let arr=[1,2,3,4,5,56,6]
// console.log(arr.length)


//2D ARRAY
let arr1=[ [1,2,3,4,5],[6,7,8,9,0],[1] ];
// console.log(arr1.length)
// console.log(arr1[0][1]);

// let data=arr1.map((a,b,c)=>a.map((res)=>{
//     return res*2;
// }))
// console.log(data);

// let sum=0;
// let max=Integer.MIN_VALUE;
// for(let i=0;i<arr1.length;i++){
//     for(let j=0;j<arr1[i].length;j++){
//         sum+=arr1[i][j];
//         if(max<arr1[i][j]){
//             max=arr1[i][j];
//         }
//     }
// }
// console.log(sum);   
// console.log(max);

//PRINT 2D ARRAY
let data=arr1.map((a,b,c)=>a.map((res)=>{
    return res;
}))
console.log(data);


//SUM OF ARRAY
let data1=arr1.reduce((sum,b)=>{
    return sum+b.reduce((val,res)=>{
        return val+res;
    },0);
},0)
console.log(data1);


//ROW WISE SUM
let rowSum=arr1.map((a,b,c)=>a.reduce((sum,res)=>{
    return sum+res;
},0))
console.log(rowSum);


//COL WISE SUM
    

// MAX OF ARRAY
arr1.flat()
let val=0;
let max=arr1.reduce((max,b)=>{
        if(b>max){
            max=b;
        
        }val=max;
        return max;
},0)
console.log(max);

