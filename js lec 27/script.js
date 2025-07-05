// fetch('https://jsonplaceholder.typicode.com/todos').then((res)=>{
//     return res.json()
// }).then((data)=>{
//     // console.log(data)
//     data.map((result)=>{
//         console.log(result);
//         showData(result)
//     })
// })


// let div=document.querySelector('div')

// function showData(res){
//     let li =document.createElement('li')
//     let h3 =document.createElement('h3')
//     li.innerText=res.title
//     h3.innerText=res.id
//     div.append(h3,li)
//     h3.style.color='red'
// }

// let city ="delhi"
// let key="9f6290d6cda9a36a63755fadee71f83d";
// let ApiData=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`

// fetch(ApiData).then((res)=>{
//     return res.json()
// }).then((data)=>{
//     console.log(data)
    
// })


let btn=document.querySelector('button')
btn.addEventListener('click',()=>{
    getWeather()
})

function getWeather(){
    let city=document.getElementById('city').value
    let key="9f6290d6cda9a36a63755fadee71f83d"
    let ApiData=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`
    
    fetch(ApiData).then((res)=>{
        return res.json()
    }).then((data)=>{
        console.log(data.main.temp)
        showData(data)
    })
}

let show =document.querySelector('#weather')

function showData(res){
    let h2=document.createElement('h2')
    h2.innerText=res.main.temp
    show.append("weather is :",h2)
} 
    
