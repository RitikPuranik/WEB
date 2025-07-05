// let btn=document.querySelector('button')
// btn.addEventListener('click',()=>{
//     getMovie()
// })

// function getMovie(){
//         let searchText=document.getElementById('input').value;
//         let ApiData=`https://api.tvmaze.com/search/shows?q=${searchText}`;



//     fetch(ApiData).then((res)=>{
//         return res.json()
//     }).then((data)=>{
//         console.log(data)
//         showData(data)
//     })
// }

// function showData(data){
//     for(let i of data){
//         let show=document.createElement('div')

//         show.innerHTML=`
//         <h1>${i.show.name}</h1>
//         <img src="${i.show.image.medium}">
//         `
//         document.querySelector('.container').appendChild(show)
//     }
// }


let input = document.querySelector('input');
let btn = document.querySelector('button');
let list = document.getElementById('list');


btn.addEventListener('click' , function(){
    let searchText = input.value;
   fetchData(searchText);
    input.value = '';
})

function fetchData(searchText){
    axios.get(`https://api.tvmaze.com/search/shows?q=${searchText}`)
    .then(function(response){
        console.log(response.data);
        manipulateDom(response.data);
    })
}


function manipulateDom(datas){
    for(let data of datas){
        let figure = document.createElement('figure');

        if(data.show.image){
            figure.innerHTML = `
            <img src=${data.show.image.original} />
            <br/>
            <h2> Genre: ${data.show.genres[0]} </h2>
            `
            list.appendChild(figure )
        }
    }
}