//CLOSURE
// function outer(){
//     let userName="hello";
//     function printName(){
//         console.log(userName);
//     }
//     return printName
// }
// let fn=outer()
// fn()


function couter(){
    let count=0;
    return{
        getCount:function(){
            return count;
        }
    }
}
let fn= couter()
console.log(fn.getCount());