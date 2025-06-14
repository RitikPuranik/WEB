//D O M

//html + js
// console.log(Document);



// let h1= document.getElementById('one');
// let h2= document.getElementsByClassName('two');
// console.log(h1);
// console.log(h2);

// //BY ID
// h1.style.backgroundColor='red'
// h1.innerText='hiiii'
// console.log(h1.innerText);


// //BY CLASS
// // h2[0].style.backgroundColor='blue'
// // h2[0].innerText='hiiii'
// // console.log(h2[0].innerText);

// for(let i of h2){
//     i.style.backgroundColor='green'
//     i.innerText='hiiii'
//     console.log(i.innerText);
// }




// let h1=document.querySelector('#one');            
// //queryselector given only one element whether it has class or id 
// let h2=document.querySelectorAll('.two');
// //queryselectorall given all the elements in the given id or class
// console.log(h1);
// console.log(h2);



// let a=document.querySelector('a')
// console.log(a.getAttribute('href'));
// a.setAttribute("href","http://flipkart.com")



const h1=document.createElement('h1')
const div=document.querySelector('div')
h1.innerText='hello world'
div.appendChild(h1)
console.log(h1)