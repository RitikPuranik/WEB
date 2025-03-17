let var1=1
let var2 = 9

while(var1 <=9 && var2>=1){
    console.log(var1,"*",var2,"=",var1*var2)
    var1++
    var2--
}


// for (let i = 1; i <= 5; i++) {
//     console.log(i, "---");
//     const number = i
//     let isPrime = true
//     for(let j=2; j<number; j++){
//       if(number % j === 0) {
//         isPrime = false
//       }
//     }
//     if(isPrime) {
//       console.log("Prime number", number);
//     }
//   }

// let number=1
for( let i=1; i<=100;i++){
    // let isdiv3=true
    if(i % 3===0){
        let a=i*3
        console.log(a);
        
    }
    else if(i %5===0 ){
        let b=i*5
        console.log(b);
        
    }
}

//do while

// MAI EK DAANAV HU :)


let arg = 2
while(arg < 2){
  console.log("Number is less than 2");
  arg++
}

// Do while
arg = 2
do{
  console.log("Number is may be less than 5");
  arg++
} while (arg < 2);

// For loop
for(let i=1; i<=10; i++) {
  if (i === 5){
    break;
  }
  console.log(i)
}


// Continue
for(let i=1; i<=5; i++) {
  console.log("before i is", i)
  if (i === 3){
    continue;
  }
  console.log("after i is", i)
}

// HW - Prime, without flag, using break

// Prime, without flag, using break


// Two Variables and One Variable