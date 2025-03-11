// function fun1(){
//     console.log('helleoe')
// }

// let btn=document.querySelector('#one')

// btn.onclick=function(){
//     console.log('byweeee')
// }


// let btn1=document.querySelector('#two')
// btn1.addEventListener('click',()=>{
//     console.log('jaooooo')
// })

// let btn1=document.querySelector('#two')
// let body =document.querySelector('body')
// let h1=document.querySelector('h1')

// btn1.addEventListener("click",()=>{
//     body.style.backgroundColor='yellow'
//     alert('kyaaaa')
//     h1.innerText='heelo'
// })


// let inp=document.querySelector('input')
// let h2=document.querySelector('h2')

// inp.addEventListener('input',(e)=>{
//     console.log(e.target.value,"kayayayaay")
//     h2.innerText=e.target.value
// })


let inp1=document.querySelector('input')
let btnn=document.querySelector('#three')
let h2=document.querySelector('h2')
let body=document.querySelector('body')
let a

inp1.addEventListener('input',(e)=>{
    console.log(e.target.value)
    let a=true
    btnn.addEventListener("click",()=>{

        h2.innerText=e.target.value
        body.style.backgroundColor='green'
        body.style.backgroundColor='yellow'
        // let a=true
        if(a){
            body.style.backgroundColor='purple'
             a=false

        }
        else{
            a=true
            body.style.backgroundColor='green'
         
        }
    })
})






