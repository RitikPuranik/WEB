// let inp =document.querySelector("input");
// let h1=document.querySelector("h1");
// inp.addEventListener('input',(e)=>{
//     console.log(e.target.value)
//     h1.innerText=e.target.value
// })


let h3=document.querySelector('h3')
let h4=document.querySelector('h4')
let h5=document.querySelector('h5')
let formEl=document.querySelector('form')
formEl.addEventListener('submit',(e)=>{
    e.preventDefault()
    console.log(formEl[0].value+"  "+formEl[1].value+"  "+formEl[2].value)
    let data={
        name:formEl[0].value,
        email:formEl[1].value,
        password:formEl[2].value
    }

    localStorage.setItem('key',JSON.stringify(data))

    let val=localStorage.getItem('key')
    val=JSON.parse(val)
    h3.innerText=val.name
    h4.innerText=val.email
    h5.innerText=val.password
})

localStorage.setItem('id',"hello")
