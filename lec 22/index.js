// var a=5
// let a=50
// console.log(window.a)
// {

// }
// if('false'){
//     console.log('heeeeelo');
    
// }
// else{
//     console.log('hiiiiii');
    
// }


// var a=56
// {
//     var a=11
//     console.log(a)
// }
// console.log(a)

// function  sum(){

// }

// {
//     let a=5
//     console.log(a);
    
// }
// console.log(a,'heheheheh');
// console.log('heheheheheh');

// const a=5;
// a=5 
// a()
// console.log(a)

// var a=56
// {
//     var a=11
//     console.log(a)

// }
// console.log(a);

// function sum() {
//     var a=5
//     console.log(a)
    
// }
// sum()
// console.log(a);
// function outer(){
//     let a=5
//     function inner(){
//         console.log(a)
//     }
//     inner()
// }
// outer()

// let a=5
// function sum(){
//     console.log(a)
// }

let obj={
    firstName:'Angel',
    lastName:'Priya',
    fullName:function(city,age){
        console.log(this.firstName +" "+ this.lastName+city+age)
    }
}
let user={
    firstName:'Ritik',
    lastName:'Roshan',

}
obj.fullName.call(user,'Bhopal')
obj.fullName.call(obj)

obj.fullName.apply(user,['bhopal',51])
