let p1=new Promise((res,req)=>{
    res()

})
let p2=new Promise((res,req)=>{
    res()
    
})
let p3=new Promise((res,req)=>{
    res()
    
})


// 1. Promise.all()
// What it does: Waits for all promises in the array to resolve.If all succeed: It returns an array of resolved values.
// If even one fails (rejects): It immediately rejects with that reason.

Promise.all([p1,p2,p3]).then((values) =>{
    console.log(values)
})




// 2. Promise.allSettled()
// What it does: Waits for all promises to settle (either resolved or rejected).Always resolves, never rejects.

Promise.allSettled([p1,p2,p3]).then((values) =>{
    console.log(values)
})



// 3. Promise.race()
// What it does: Resolves or rejects as soon as the first promise settles (whichever happens first).
// Returns the result or reason of the first settled promise.

Promise.race([p1,p2,p3]).then((values) =>{
    console.log(values)
})




// 4. Promise.any()
// What it does: Resolves as soon as any one promise resolves.If all promises reject, it rejects with an AggregateError.

Promise.any([p1,p2,p3]).then((values) =>{
    console.log(values)
})