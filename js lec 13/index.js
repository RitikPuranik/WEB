//THIS
// console.log(window)
// console.log(this)
// console.log(this==window)




// let obj={
//     name:"palak",
//     amount:13000,
//     getBalance:function(){
//         console.log(this);        //IN THIS 'THIS' KEYWORD REFER TO ITS PARENT THAT IS OBJ
//     }
// }
// obj.getBalance()


// let obj1={
//     name:"palak",
//     amount:13000,
//     getBalance:()=>{
//         console.log(this);       //IN THIS 'THIS' KEYWORD REFER TO THE PARENT OF THE PARENT THAT IS THE WINDOW
//     }
// }
// obj1.getBalance()



// //QUESTION
// var a=5;
// let obj={
//     name:"palak",
//     amount:13000,
//     getBalance:()=>{
//         console.log(this.a);       
//     }
// }
// obj.getBalance()
// //VAR ENABLES TO GO TO THE WINDOW BECAUSE OF ITS SCOPE
// //=>5


// let b=5;
// let obj1={
//     name:"palak",
//     amount:13000,
//     getBalance:()=>{
//         console.log(this.b);       
//     }
// }
// obj1.getBalance()
// //LET DO NOT GO INSIDE THE WINDOW BECAUSE OF ITS SCOPE
// //=>UNDEFINED




//PROTOTYPE
let obj={
    id:1,
    name:"ritik",
}
console.log(obj.lastName);  //UNDEFINED SINCE LASTNAME KEY IS NOT PRESENT IN THE OBJECT
console.log(obj.toString());



//PROTOTYPAL CHAIN

// arr=>arr.prototype=>Object.prototye=>null

//ARR=>IT IS AN ARRAY
//ARR.PROTOTYPE=>IT IS THE PROTOTYPE OF ARR
//OBJECT.PROTOTYPE=>IT IS THE PROTOTYPE OF ARR.PROTOTYPE IF THE GIVEN FUNCTION IS NOT FOUND
//IF THE GIVEN FUNCTION IS NOT FOUND IT GIVEN NULL THAT IS THE STOPPING POINT AND THE GIVEN FUCTION IS NOT PRESENT
//IT DELIVERS NULL



// MAKING OWN FUNCTION
Array.prototype.aanya=function(cb){
    console.log(cb);
    
    let res=[]
    for(var i=0;i<this.length;i++){
      var data=  cb(this[i],i,this)
       res.push(data)
        
    }
    return res

}

let arr=[1,2,3]
 let val=  arr.aanya(   (a,b,c)=>{ 
    return a*2      

}   )
console.log(val);



