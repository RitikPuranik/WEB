let score=81;
if(score<=100 && score>=90){
    console.log('Grade A+')
}
else if(score<90 && score>=80){
    console.log('Grade A')
}
else if(score<80 && score>=70){
    console.log('Grade B+')
}
else if(score<70 && score>=60){
    console.log('Grade B')
}
else if(score<60 && score>=50){
    console.log('Grade C+')
}
else if(score<50 && score>=40){
    console.log('Grade C')

}
else if (score<40 && score>=33){
    console.log('Grade D')
}
else if (score<33) {
    console.log('Fail')
}

// function sum(a=50,b=30){
//     console.log(a+b)
// }
// sum(5,6)

// const call=() => {
//     console.log(5+5)
// }
// function sum(){
//     // console.log('hello');
//     return 5
    
// }
let data= sum()
console.log(data);
function sum(){
    console.log('hello');
}
sum()

for(var i=0;i<=5;i++){
    console.log(i);

}
let arrr=[1,2,'hello',false,null,undefined]
for(let i in arrr){
    console.log(i);
}
for(let i of arrr){
    console.log(i);
}

