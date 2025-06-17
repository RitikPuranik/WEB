const arr=[
    'https://images.unsplash.com/photo-1749810364373-5e2f18bb842a?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1748783266832-81bc4a3d44c7?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1749847850294-19c4f59bf3f9?q=80&w=393&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1750059397834-5b359a05dba0?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
]


const images = document.querySelector("img");

let num=0;
setInterval(function(){
    images.setAttribute('src',arr[num]);
    num=(num+1)%arr.length;
},3000)



// function fun1(){
//     console.log("hello");
// }

// let btn=document.querySelector("#one");
// btn.onclick=function(){
//     console.log("bye")
// }

let btn=document.querySelector("#one");
btn.addEventListener("click",function(){
    console.log("bye")
})

let body=document.querySelector("body");
btn.addEventListener("click",function(){
    if(body.style.backgroundColor=="red"){
        body.style.backgroundColor="green";
    }
    else{
        body.style.backgroundColor="red";
    }
})
