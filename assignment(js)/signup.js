let x = document.getElementById("login");
let y = document.getElementById("register");
let z = document.getElementById("btn");
let log = document.getElementById("log");
let reg = document.getElementById("reg");
let after = document.getElementById("after");

function register() {
x.style.left = "-500px";
y.style.left = "0px";
z.style.left = "110px";
log.style.color = "rgb(234, 234, 235)";
reg.style.color = "#252525";
after.style.left = "0";
after.style.top = "0";
}
function login() {
x.style.left = "0px";
y.style.left = "500px";
z.style.left = "0px";
reg.style.color = "rgb(234, 234, 235)";
log.style.color = "#252525";
after.style.left = "50%";
after.style.top = "0";

}



let formEl=document.querySelector("#register")
formEl.addEventListener("submit",(e)=>{
    e.preventDefault()
    let data={
        name:formEl[0].value,
        email:formEl[1].value,
        password:formEl[2].value
    }

    localStorage.setItem("user",JSON.stringify(data))
    
    let val=localStorage.getItem("user")
    
})

let formE2=document.querySelector("#login")
formE2.addEventListener("submit",(e)=>{
    e.preventDefault()
    let data={
        name:formE2[0].value,
        password:formE2[1].value
    }
    let val=localStorage.getItem('user')
    val=JSON.parse(val)
    if (formE2[0].value==val.name && formE2[1].value==val.password) {
        console.log("login success")
    }
    else{
        console.log("login failed")
    }
})


