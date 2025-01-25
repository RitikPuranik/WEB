//API


let apiLink='https://dummyjson.com/recipes'
let data=fetch(apiLink)
// console.log(data,'kayayay')
data.then((res)=>{
    // console.log(res,'jajajaj')
    return res.json()

})
.then((d)=>{
    // console.log(d.recipes[0].name,'kyayayay')                           //this gives the name of the 0th ine=dex
    let filterData =d.recipes.filter((apiData)=>{
        // console.log(apiData)
        return apiData.cuisine=='Indian'                                   //apiData is the variable here and gives the value of the given link
    })
    console.log(filterData,"kya ho tum");
})
// console.log(filterData,"kya ho tum");